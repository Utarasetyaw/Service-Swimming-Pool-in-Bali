import React from "react";
import { RiMailCheckLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <section className="flex flex-col justify-center items-center mt-10 h-full">
        <RiMailCheckLine className=" w-96 h-56 mb-10" />
        <h3>Email : Swimmingpoolbali@gmail.com</h3>
        <h3>Phone : 081236383455 / 081239545459</h3>
      </section>
    </div>
  );
};

export default Contact;
