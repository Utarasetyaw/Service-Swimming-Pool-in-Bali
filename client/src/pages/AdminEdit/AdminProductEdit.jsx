import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Edit = (props) => {
  const {judul, keterangan, foto, id } = props.location.state;
  const [newjudul, setNewjudul] = useState(judul);
  const [newfoto, setNewfoto] = useState(foto);
  const [newketerangan, setNewketerangan] = useState(keterangan);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newfoto, newjudul, newketerangan);

    if (newjudul !== "" && newfoto !== "" && newketerangan !== "") {
      console.log(newjudul, newketerangan, newfoto, id);
      fetch("http://localhost:5000/product/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ judul: newjudul, foto: newfoto, keterangan: newketerangan }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          history.push("/product");
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 m-auto"
    >
      <h2 className="text-center uppercase m-5">Edit Product</h2>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        <span>judul :</span>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={newjudul}
          onChange={(e) => setNewjudul(e.target.value)}
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
          value={newketerangan}
          onChange={(e) => setNewketerangan(e.target.value)}
        ></textarea>
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        <span>foto :</span>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={newketerangan}
          onChange={(e) => setNewfoto(e.target.value)}
        />
      </label>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Update
      </button>
    </form>
  );
};

export default Edit;
