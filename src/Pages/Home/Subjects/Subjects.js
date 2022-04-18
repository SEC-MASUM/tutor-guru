import React from "react";

import english from "../../../Assets/images/subject/English.png";
import science from "../../../Assets/images/subject/science.png";
import physics from "../../../Assets/images/subject/physics.png";
import chemistry from "../../../Assets/images/subject/chemistry.png";
import geometry from "../../../Assets/images/subject/geometry.png";
import Subject from "../Subject/Subject";

const Subjects = () => {
  const subjects = [
    {
      id: 1,
      name: "Science",
      description: "Class 6 to 12",
      img: science,
    },
    {
      id: 2,
      name: "Physics",
      description: "Class 9 to 12",
      img: physics,
    },
    {
      id: 3,
      name: "Chemistry",
      description: "Class 9 to 12",
      img: chemistry,
    },
    {
      id: 4,
      name: "Mathematics",
      description: "Class 1 to 12",
      img: geometry,
    },
    {
      id: 5,
      name: "English",
      description: "Class 9 to 12",
      img: english,
    },
    {
      id: 6,
      name: "Geometry",
      description: "Class 1 to 10",
      img: geometry,
    },
  ];
  return (
    <div className="container mx-auto  mb-10 text-center">
      <h1 className="font-bold text-5xl py-8">Subjects</h1>
      <div className="grid grid-cols-3  gap-6 py-10 ">
        {subjects.map((subject) => (
          <Subject key={subject.id} subject={subject}></Subject>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
