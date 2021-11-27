import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [judul, setJudul] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [foto, setFoto] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Test")
    if (judul !== "" && keterangan !== "" && foto !== "") {
      fetch("http://localhost:5000/product", {
        method: "post",
        headers: {  
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ judul, keterangan, foto }),
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
      <h2 className="text-center uppercase m-5">Create Product</h2>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        <span>judul :</span>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        <span>foto :</span>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
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
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
        ></textarea>
      </label>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </form>
  );
};

export default Create;
