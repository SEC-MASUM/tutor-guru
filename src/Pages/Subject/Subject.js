import React from "react";

const Subject = ({subject}) => {
   const { name, description, img } = subject;
   return (
     <div className="bg-black text-white text-center w-48 h-52 flex  justify-center items-center mx-auto">
       <div className="space-y-3 ">
         <div className="flex justify-center">
           <img src={img} alt="" className="w-12" />
         </div>
         <h1 className="font-bold">{name}</h1>
         <div className="h-1 w-2/4  bg-yellow-400 mx-auto"></div>
         <p>{description}</p>
       </div>
     </div>
   );
};

export default Subject;
