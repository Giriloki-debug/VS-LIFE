import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-200 text-gray-300 py-10">
      <div className=" px-4 laptop:px-8">
        <div className="flex flex-wrap justify-between gap-6">
          {/* About Section */}
          <div className="w-full laptop:w-1/5 desktop:w-1/6">
            <h3 className="text-lg font-semibold text-[#1D4ED8] mb-4">About Us</h3>
            <p className="text-[16px] leading-relaxed ">
              VSLife Insurance is dedicated to providing reliable and affordable
              insurance solutions for individuals and families.
            </p>
          </div>

          {/* Services Section */}
          <div className="w-full laptop:w-1/5 desktop:w-1/6">
            <h3 className="text-xl font-semibold text-[#1D4ED8] mb-4">Services</h3>
            <ul className="text-sm space-y-2 ">
               <a href="#"><li>Life Insurance</li></a>
               <a href="#"><li>Health Insurance</li></a>
               <a href="#"><li>Retirement Plans</li></a>
               <a href="#"><li>Investment Solutions</li></a>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="w-full laptop:w-1/5 desktop:w-1/6">
            <h3 className="text-lg font-semibold text-[#1D4ED8] mb-4">Resources</h3>
            <ul className="text-sm space-y-2">
             <a href="#"><li>FAQs</li></a>
             <a href="#"> <li>Blog</li></a>
               <a href="#"><li>Policy Terms</li></a>
               <a href="#"><li>Privacy Policy</li></a>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full laptop:w-1/5 desktop:w-1/6">
            <h3 className="text-lg font-semibold text-[#1D4ED8] mb-4">Contact Us</h3>
            <ul className="text-sm space-y-2">
               <a href="#"> <li>Email: support@vslife.com</li></a>
               <a href="#"><li>Phone: +123 456 7890</li></a>
               <a href="#"> <li>Address: 123 Main Street, Pudhukottai</li></a>
            </ul>
          </div>
        

        {/* Newsletter Section */}
        <div className=" items-end justify-end">
          <h3 className="text-lg font-semibold text-[#1D4ED8] mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter to stay updated.
          </p>
          <form>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex justify-end items-end px-3 py-2 rounded-l-lg text-gray-800"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        </div>
        {/* Social Media and Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col laptop:flex-row justify-between items-center">
          <div className="mb-4 laptop:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Dynamic Liquids. All Rights Reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
