import Link from "next/link";
import React from "react";


const companyLogo = [
  { id: 1, img: "/company/brand1.png" },
  { id: 2, img: "/company/brand2.png" },
  { id: 3, img: "/company/brand3.png" },
  { id: 4, img: "/company/brand4.png" },
  { id: 5, img: "/company/brand5.png" },
];


const Catogary = () => {
  return (
    <div className="max-w-screen-2xl container xl:px-28 px-4 py-16">
      {/* brand logo */}
      <div className="flex items-center justify-around flex-wrap gap-2 py-5">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="" height={300} />
          </div>
        ))}
      </div>

      {/* category grid */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
        <p className="font-semibold md:-rotate-90 uppercase text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex">
          Explore new and popular styles
        </p>
        <div>
          <Link href="/">
            <img src="/category/image1.png" alt="" className="w-full hover:scale-105 transition-all duration-200" />
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2">
            <Link href="/">
              <img
                src="/category/image2.png"
                alt=""
                className="hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link href="/">
              <img
                src="/category/image3.png"
                alt=""
                className="hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link href="/">
              <img
                src="/category/image4.png"
                alt=""
                className="hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link href="/">
              <img
                src="/category/image5.png"
                alt=""
                className="hover:scale-105 transition-all duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catogary;
