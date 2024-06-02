import React from "react";
import "./Experiences.css";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Experiences = ({ experience }) => {
  return (
    <div className="section-margin flex flex-col items-center gap-10 bg-[#f4fafc] py-10 md:py-20 ">
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-outfit text-5xl font-semibold">
          {experience.title}
        </h1>
        <p>{experience.description}</p>
      </div>
      <div className="grid  md:grid-cols-3 gap-10 px-5">
        <div className="indivu">
          <h2>Junior</h2>
          <p>{experience.levels.junior.yearsOfExperience}</p>
          <ul className="flex flex-col">
            {experience.levels.junior.responsibilities.map(
              (responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ),
            )}
          </ul>
          <div className="star-rating">
            <FaStar />
            <CiStar />
            <CiStar />
          </div>
        </div>
        <div className="indivu">
          <h2>Intermediate</h2>
          <p>{experience.levels.intermediate.yearsOfExperience}</p>
          <ul className="flex flex-col">
            {experience.levels.intermediate.responsibilities.map(
              (responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ),
            )}
          </ul>
          <div className="star-rating">
            <FaStar />
            <FaStar />
            <CiStar />
          </div>
        </div>
        <div className="indivu">
          <h2>Senior</h2>
          <p>{experience.levels.senior.yearsOfExperience}</p>
          <ul className="flex flex-col">
            {experience.levels.senior.responsibilities.map(
              (responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ),
            )}
          </ul>
          <div className="star-rating">
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
