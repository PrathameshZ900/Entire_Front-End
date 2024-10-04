
    // let addTodoButton = document.getElementById("addBtn");
    // let tableBody = document.getElementById("todoTableBody");
    // let inputTitle = document.getElementById("todoName");
    // let prioritySelect = document.getElementById("priority");

    document.addEventListener("DOMContentLoaded", () => {
        const addTodoButton = document.getElementById("addBtn");
        const tableBody = document.getElementById("todoTableBody");
        const inputTitle = document.getElementById("todoName");
        const prioritySelect = document.getElementById("priority");

        addTodoButton.addEventListener("click", () => {
            const title = inputTitle.value.trim();
            const priority = prioritySelect.value;

            if (title === "") {
                alert("Todo cannot be empty!");
                return;
            }

            const todo = {
                title: title,
                priority: priority,
                status: "Pending🔃"
            };

            let todos = JSON.parse(localStorage.getItem("todos")) || [];
            todos.push(todo);
            localStorage.setItem("todos", JSON.stringify(todos));

            renderTable();
            inputTitle.value = "";
        });

        function renderTable() {
            const todos = JSON.parse(localStorage.getItem("todos")) || [];
            tableBody.innerHTML = "";

            todos.forEach((todo, index) => {
                const row = document.createElement("tr");

                const titleCell = document.createElement("td");
                titleCell.innerText = todo.title;
                
                const priorityCell = document.createElement("td");
                // priorityCell.setAttribute("id","low")
                priorityCell.innerText = todo.priority;
                if (todo.priority === "medium") {
                    priorityCell.classList.add("medium-priority");
                } else if (todo.priority === "high") {
                    priorityCell.classList.add("high-priority");
                }else if(todo.priority === "low"){
                    priorityCell.classList.add("low-priority");
                }

                const statusCell = document.createElement("td");
                const statusButton = document.createElement("button");
                statusButton.classList.add("toggle");
                statusButton.innerText = todo.status;
                statusButton.setAttribute("id","statusButton")
                statusButton.addEventListener("click", () => {
                    todo.status = todo.status === "Pending🔃" ? "Completed✅" : "Pending🔃";
                    todos[index] = todo;
                    localStorage.setItem("todos", JSON.stringify(todos));
                    renderTable();
                });
                statusCell.appendChild(statusButton);

                const deleteCell = document.createElement("td");
                const deleteButton = document.createElement("button");
                deleteButton.setAttribute("id","delbtn")
                deleteButton.classList.add("archiveBtn");
                deleteButton.innerText = "Archive";
                deleteButton.addEventListener("click", () => {
                    const archivedTodos = JSON.parse(localStorage.getItem("archive")) || [];
                    archivedTodos.push(todo);
                    localStorage.setItem("archive", JSON.stringify(archivedTodos));
                    todos.splice(index, 1);
                    localStorage.setItem("todos", JSON.stringify(todos));
                    renderTable();
                });
                deleteCell.appendChild(deleteButton);

                row.appendChild(titleCell);
                row.appendChild(priorityCell);
                row.appendChild(statusCell);
                row.appendChild(deleteCell);

                tableBody.appendChild(row);
            });
        }

        renderTable();
    });

// no idea//