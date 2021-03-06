import React from "react";

const Subject = ({subject}) => {
   const { name, description, img } = subject;
   return (
     <div className="bg-black text-white text-center w-9/12 h-[300px]  flex  justify-center items-center my-4 mx-auto">
       <div className="space-y-4">
         <div className="flex justify-center">
           <img src={img} alt="" className="" />
         </div>
         <h1 className="font-semibold text-3xl">{name}</h1>
         <div className="h-1 w-2/4  bg-yellow-400 mx-auto"></div>
         <p className="text-xl">{description}</p>
       </div>
     </div>
   );
};

export default Subject;
