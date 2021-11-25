import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Edit = (props) => {
  const { title, text, date, id } = props.location.state;
  const [newTitle, setNewTitle] = useState(title);
  const [newDate, setNewDate] = useState(date);
  const [newText, setNewText] = useState(text);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newDate, newText, newTitle);

    if (newTitle !== "" && newDate !== "" && newText !== "") {
      console.log(newTitle, newText, newDate, id);
      fetch("http://localhost:5000/blog/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ judul: newTitle, date: newDate, keterangan: newText }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          history.push("/blog");
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 m-auto"
    >
      <h2 className="text-center uppercase m-5">Edit Blog</h2>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        <span>Title :</span>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        <span>Keterangan :</span>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        ></textarea>
      </label>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Update
      </button>
    </form>
  );
};

export default Edit;
