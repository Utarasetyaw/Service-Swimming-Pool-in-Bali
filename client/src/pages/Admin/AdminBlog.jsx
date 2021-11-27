import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PaperCard from "../../components/PaperCard";

const AdminBlog = () => {
  const [judul, setJudul] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [isCreate, setIsCreate] = useState(false);
  const [blogs, setBlogs] = useState(null);
  const history = useHistory();

  const urlBase = "http://localhost:5000/blog";

  useEffect(() => {
    fetch(urlBase)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setBlogs(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();


    if (judul !== "" && keterangan !== "") {
      fetch("http://localhost:5000/blog", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ judul, keterangan}),
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
    <>
   {isCreate? <form
    onSubmit={handleSubmit}
    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 m-auto"
  >
    <h2 className="text-center uppercase m-5">Create Blog</h2>
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
  </form>: 
  <div>
    <div className="flex justify-center items-center">
  <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline" 
  onClick={() => setIsCreate(true)}>create</button>  
  </div>
   {blogs &&
          blogs.map((blog) => (
            <PaperCard
              key={blog.id}
              title={blog.judul}
              date={blog.date}
              text={blog.keterangan}
              id={blog.id}
              isAdmin={true}
            />
          ))}
  </div>}
  </>);
};

export default AdminBlog;
