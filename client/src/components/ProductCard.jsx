import React from "react";

const ProductCard = ({ judul, keterangan, foto, packages }) => {
  return (
    <div className="card m-auto w-64 md:w-40 lg:w-40 xl:w-64 cursor-pointer mt-5 hover:shadow-xl transform hover:scale-100 transition ease-out duration-500 ">
      <img src={"img/"+foto} alt={judul} className="" />
      <div className=" m-1 flex flex-col ">
        <span className="text-base text-gray-600 md:text-xs">
          {judul} - {packages}
        </span>
        {/* <span className="text-sm text-gray-500 md:text-xs">{id}</span> */}
        <span className="text-xs text-gray-400">{keterangan}</span>
      </div>
    </div>
  );
};

export default ProductCard;
