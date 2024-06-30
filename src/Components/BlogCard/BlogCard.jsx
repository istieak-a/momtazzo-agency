import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ img, title, desc, link }) => {
  return (
    <Link to={link} className="flex flex-col gap-5 hover:shadow-lg overflow-hidden duration-300">
      <img className="h-[200px] object-cover hover:scale-105 duration-300" src={img} alt={title} />
      <div className=" flex flex-col gap-3 px-5 pb-3">
        <h2 className="text-[20px] leading-7">{title}</h2>
        <p className="text-[14px] text-gray-800 line-clamp-4">{desc}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
