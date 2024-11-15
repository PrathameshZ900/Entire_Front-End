import logo from './logo.svg';
import './App.css';


import React, { useState, useEffect } from "react";

const AlbumGallery = () => {
  const [albums, setAlbums] = useState([]);
  const [newAlbumTitle, setNewAlbumTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch albums on component mount
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        if (!response.ok) throw new Error("Failed to fetch albums.");
        const data = await response.json();
        setAlbums(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  // Handle adding a new album
  const handleAddAlbum = async (e) => {
    e.preventDefault();

    if (!newAlbumTitle.trim()) {
      setError("Album title cannot be empty.");
      return;
    }

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/albums", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newAlbumTitle,
        }),
      });
      if (!response.ok) throw new Error("Failed to add album.");

      const addedAlbum = await response.json();
      setAlbums([addedAlbum, ...albums]); // Add new album to the top
      setNewAlbumTitle("");
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  // Conditional rendering
  if (loading) return <p>Loading albums...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Album Gallery</h1>

      {/* Add Album Form */}
      <form onSubmit={handleAddAlbum} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="New Album Title"
          value={newAlbumTitle}
          onChange={(e) => setNewAlbumTitle(e.target.value)}
          style={{ padding: "10px", marginRight: "10px", width: "300px" }}
        />
        <button type="submit" style={{ padding: "10px" }}>
          Add Album
        </button>
      </form>

      {/* Album List */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {albums.map((album) => (
          <div
            key={album.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "white")}
          >
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>{album.title}</h3>
            <span role="img" aria-label="album" style={{ fontSize: "50px" }}>
              🎵
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumGallery;




