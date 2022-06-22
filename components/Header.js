import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div>
          <h1 className="text-[#94a3b8] text-4xl">
            Notus NextJS - A beautiful extension for Tailwind CSS.
          </h1>
          <h2 className="text-[#94a3b8] ">
            Notus NextJS is Free and Open Source. It does not change any of the
            CSS from Tailwind CSS. It features multiple HTML elements and it
            comes with dynamic components for ReactJS, Vue and Angular.
          </h2>
        </div>
        <div>
          <img src="/pattern_nextjs.png " className="object-cover" />
        </div>
      </div>
    </>
  );
};

export default Header;
