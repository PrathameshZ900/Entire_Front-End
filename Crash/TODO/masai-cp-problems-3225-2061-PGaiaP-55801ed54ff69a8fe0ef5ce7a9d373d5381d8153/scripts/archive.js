// let tableBody = document.getElementById("todoTableBody");
// let prioritySelect = document.getElementById("prioritySelect");
// let statusSelect = document.getElementById("statusSelect");


document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("todoTableBody");
    const prioritySelect = document.getElementById("prioritySelect");
    const statusSelect = document.getElementById("statusSelect");

    prioritySelect.addEventListener("change", renderArchivedTodos);
    statusSelect.addEventListener("change", renderArchivedTodos);

    function renderArchivedTodos() {
        const archivedTodos = JSON.parse(localStorage.getItem("archive")) || [];
        const selectedPriority = prioritySelect.value;
        const selectedStatus = statusSelect.value;

        tableBody.innerHTML = "";

        archivedTodos.forEach((todo, index) => {
            if ((selectedPriority === "" || todo.priority === selectedPriority) &&
                (selectedStatus === "" || todo.status === selectedStatus)) {
                const row = document.createElement("tr");
                row.setAttribute("id","row")

                const titleCell = document.createElement("td");
                titleCell.innerText = todo.title;
                titleCell.setAttribute("id","titleCell")

                const priorityCell = document.createElement("td");
                priorityCell.innerText = todo.priority;
                if (todo.priority === "medium") {
                    priorityCell.classList.add("medium-priority");
                } else if (todo.priority === "high") {
                    priorityCell.classList.add("high-priority");
                }else if(todo.priority === "low"){
                    priorityCell.classList.add("low-priority");
                }

                const statusCell = document.createElement("td");
                statusCell.innerText = todo.status;

                const restoreCell = document.createElement("td");
                const restoreButton = document.createElement("button");
                restoreButton.classList.add("restoreBtn");
                restoreButton.innerText = "Restore";
                restoreButton.addEventListener("click", () => {
                    let todos = JSON.parse(localStorage.getItem("todos")) || [];
                    todos.push(todo);
                    localStorage.setItem("todos", JSON.stringify(todos));
                    archivedTodos.splice(index, 1);
                    localStorage.setItem("archive", JSON.stringify(archivedTodos));
                    renderArchivedTodos();
                });
                restoreCell.appendChild(restoreButton);

                const deleteCell = document.createElement("td");
                const deleteButton = document.createElement("button");
                deleteButton.classList.add("deleteBtn");
                deleteButton.innerText = "Delete";
                deleteButton.addEventListener("click", () => {
                    archivedTodos.splice(index, 1);
                    localStorage.setItem("archive", JSON.stringify(archivedTodos));
                    renderArchivedTodos();
                });
                deleteCell.appendChild(deleteButton);

                row.appendChild(titleCell);
                row.appendChild(priorityCell);
                row.appendChild(statusCell);
                row.appendChild(restoreCell);
                row.appendChild(deleteCell);

                tableBody.appendChild(row);
            }
        });
    }

    renderArchivedTodos();
});
