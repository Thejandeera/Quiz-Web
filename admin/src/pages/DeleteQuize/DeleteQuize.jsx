import React, { useState } from "react";
import axios from "axios";
import "./DeleteQuize.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteQuize = () => {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    if (!id) {
      toast.error("Please enter an ID.");
      return;
    }
    try {
      await axios.delete(`http://localhost:8080/question/delete/${id}`);
      toast.success("Question deleted successfully.");
      setId("");
    } catch (error) {
      toast.error("Error deleting question.");
    }
  };

  return (
    <div className="delete-container">
      <h2>Delete a Question</h2>
      <input
        type="text"
        placeholder="Enter the ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="delete-input"
      />
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
      {message && <p className="delete-message">{message}</p>}
    </div>
  );
};

export default DeleteQuize;
