import React from "react";
import SuggestionCard from "./SuggestionCard";

const Homerigh = () => {
  return (
    <div className="">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div>
              <img
                className="w-12 h-12 rounded-full"
                src="https://cdn.pixabay.com/photo/2020/10/11/19/51/cat-5646889_1280.jpg"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p>FullName</p>
              <p className="opacity-70">userName </p>
            </div>
          </div>
          <div>
            <p className="text-blue-400 font-semibold">Switch</p>
          </div>
        </div>
        <div className="space-y-5 mt-10">
          {[1, 1, 1, 1].map((item) => (
            <SuggestionCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homerigh;
