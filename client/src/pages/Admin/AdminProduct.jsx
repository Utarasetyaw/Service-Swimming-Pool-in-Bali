import React, { useState, useEffect } from "react";
import { product } from "../../utils/sjt_product";
import { FaSearch } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import ProductCard from "../../components/PaperCardProduct";
import { useHistory } from "react-router-dom";

const Product = () => {
  
  const [search, setSearch] = useState("");
  const [dataProduct, setDataProduct] = useState([])
  const [judul, setJudul] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [foto, setfoto] = useState("");
  const [isCreate, setIsCreate] = useState(false);
  const history = useHistory();


  // const filtered = product.filter((item) => {
  //   return item.product_name.toLowerCase().includes(search.toLowerCase());
  // });

  useEffect(async () => {
    const response = await fetch("http://localhost:5000/product")
    const data = await response.json()
    setDataProduct(data)  
  }, [])
  const handleSubmit = (e) => {
    console.log("asdsadasd")
    e.preventDefault();
    console.log("sfasdfd")
  if (judul !== "" && keterangan !== "") {
      fetch("http://localhost:5000/product", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ judul, keterangan}),
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
    <div className=" bg-gray-50">
      <section id="details">
        <div className="font-roboto text-center text-green-600 text-3xl mb-5 py-5 uppercase">
          Welcome to Poolshop SuryaJayaTeknik
        </div>
        <p className="text-justify px-10 p-3">
          Thank you for visiting Surya Jaya Teknik. We have been satisying
          customers with a secure and realiable service across Indonesia
          especially since 2016. Our experienced team have a continued
          commitment to provide you with superior product knowledge in the pool
          industry, the best possible service and great value deals on pool
          products.
        </p>
        <div className="font-roboto text-green-600 text-3xl px-10 py-10">
          Featured Products
        </div>
         <>
   {isCreate? <form
    onSubmit={handleSubmit}
    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 m-auto"
  >
    <h2 className="text-center uppercase m-5">Create product</h2>
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
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Submit
    </button>
  </form>: 
  <div>
    <div className="flex justify-center items-center">
  <button className="mt-10 mb-10 bg-blue-500 hover:bg-blue-100 text-white w-1 font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline" 
  onClick={() => setIsCreate(true)}>create</button>  
  </div>
  </div>}
  </>);
  {isCreate? <></> : 
   <div className="grid md:grid-cols-4 gap-4">
        
          {dataProduct.map((data)=> {
            return(
              <div key={data.id}>
                <ProductCard
                  id={data.id}
                  judul={data.judul}
                  keterangan={data.keterangan}
                  foto={data.foto}
                  packages={data.package}
                />
              </div>
            )
          })}
        
          
        </div>}
      </section>
    </div>
  );
};

export default Product;
