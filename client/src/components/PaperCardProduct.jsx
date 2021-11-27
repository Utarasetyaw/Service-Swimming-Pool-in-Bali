import React from "react";
import Trash from "../img/trash_icon.svg";
import EditIcon from "../img/edit_icon.svg";
import { Link } from "react-router-dom";

const PaperCardp = ({ judul, keterangan, foto, id }) => {
  const handleDelete = () => {
    fetch("http://localhost:5000/product/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        res.json();
        window.location.reload();
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="card m-auto w-64 md:w-40 lg:w-40 xl:w-64 cursor-pointer mt-5 hover:shadow-xl transform hover:scale-100 transition ease-out duration-500 ">
      <img src={process.env.PUBLIC_URL + "/img/" + foto} alt={judul} className="" />
      <div className="flex mt-1 mb-1"><Link
              to={{
                pathname: "/editp",
                state: { judul, keterangan, foto, id },
              }}
              className="mr-2"
            >
              <img
                src={EditIcon}
                alt="trash icon"
                className="cursor-pointer bg-green-500 text-green-800 fill-current h-8 w-8 rounded-lg"
              />
            </Link>

            <img
              src={Trash}
              alt="trash icon"
              className="cursor-pointer bg-red-500 text-red-800 fill-current h-8 w-8 rounded-lg"
              onClick={handleDelete}
            />
          </div>
      <div className=" m-1 flex flex-col ">
        <span className="text-base text-gray-600 md:text-xs">
          {judul} - {judul}
        </span>
        <span className="text-xs text-gray-400">{keterangan}</span>
      </div>
    </div>
    // <>
    //   <div className=" bg-blue-100 rounded overflow-hidden shadow-md relative container  mx-auto px-10 py-10 font-serif mb-10">
    //     <div className=" flex justify-between flex-col md:flex-row">
    //       <div className="text-xl md:text-4xl text-gray-600 mb-5">{judul}</div>
    //       <div className="flex">
    //         <Link
    //           to={{
    //             pathname: "/editp",
    //             state: { judul, keterangan, foto, id },
    //           }}
    //           className="mr-5"
    //         >
    //           <img
    //             src={EditIcon}
    //             alt="trash icon"
    //             className="cursor-pointer bg-green-500 text-green-800 fill-current h-8 w-8 rounded-lg"
    //           />
    //         </Link>

    //         <img
    //           src={Trash}
    //           alt="trash icon"
    //           className="cursor-pointer bg-red-500 text-red-800 fill-current h-8 w-8 rounded-lg"
    //           onClick={handleDelete}
    //         />
    //       </div>
    //     </div>

    //     <div className="text-sm pb-4">{keterangan}</div>
    //     <img src={"img/"+foto} alt={judul} className="" />
    //   </div>
    // </>
  );
};

export default PaperCardp;