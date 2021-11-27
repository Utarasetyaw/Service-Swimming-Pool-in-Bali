import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import ProductCard from "../components/ProductCard";


const Product = () => {
  const [produuct, setProduct] = useState([]);
  const urlBase = "http://localhost:5000/product";

  useEffect(() => {
    fetch(urlBase)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setProduct(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className=" bg-gray-50">
      <section id="details">
        <div className="font-roboto text-center text-green-600 text-3xl mb-5 py-5 uppercase">
          Welcome to Poolshop Service Bali
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

        <div className="flex flex-col sm:flex-row items-center justify-between px-10 py-10 ">
          <button className="ml-20 bg-green-500 text-white shadow-md rounded flex justify-center items-center p-2 mt-4">
            <a target="" href="https://wa.me/628123618911?text=Order:">
              ORDER NOW !{" "}
            </a>
            <FaWhatsapp className="w-8 h-8 p-2 mr-4fill-green-500 text-white rounded-full" />
          </button>
        </div>
        <div className="grid md:grid-cols-4">
          {produuct.map((data) => {
            return (
              <div key={data.id}>
                <ProductCard
                 id={data.id}
                 judul={data.judul}
                 keterangan={data.keterangan}
                 foto={data.foto}
                 packages={data.package}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Product;