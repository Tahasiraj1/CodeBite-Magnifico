import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Problems = () => {
  return (
    <div className="lg:px-10 w-full h-auto">
      <div
        className="lg:px-10 lg:py-10 flex items-center justify-end relative lg:rounded-2xl"
        style={{
          backgroundImage: "url(/images/airbaloons.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
      >
        <div className="absolute inset-0 bg-[#581C87] mix-blend-multiply opacity-60 lg:rounded-2xl" />
        <div className="flex flex-col items-start justify-center space-y-4 max-w-lg px-4 text-white z-10">
          <h1 className="text-5xl font-bold">Problems</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta.
          </p>
          <p className="bg-transparent hover:bg-transparent text-white flex items-center justify-center shadow-none">
            Improve Workflow <FaArrowRight className="ml-4" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Problems;
