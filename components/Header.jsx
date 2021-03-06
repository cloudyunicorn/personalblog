import React, { useState, useEffect } from 'react';

import Link from 'next/link';

import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-300 py-8">
        <div className="flex justify-center md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-nunito font-extrabold text-4xl text-sky-100">
              Cloudy Unicorn
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-gray-200 ml-4 font-semibold cursor-pointer hover:text-gray-800 hover:scale-105 transition duration-500 ease">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
