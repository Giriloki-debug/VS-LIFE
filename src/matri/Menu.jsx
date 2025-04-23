import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(""); // Track selected link
  const navigate = useNavigate();

  const handleClick = (link) => {
    setSelected(link); // Set the selected link
    navigate("/"); // Navigate to home
  };
                        
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl container mx-auto  px-6 py-4 flex items-center justify-between relative">
     <div className="hidden tablet:flex flex-1 justify-center space-x-10 text-gray-900 text-lg items-center">
     {[
        "All Matches",
        "New Joining",
        "Nearby Matches",
        "Viewed You",
        "Shortlisted You",
        "Viewed By You",
        "Mutual Matches",
      ].map((item, index) => (
        <a
          key={index}
          href="#"
          className={`relative group transition duration-300 font-semibold ${
            selected === item ? "text-[#18AD76]" : "text-black"
          }`}
          onClick={() => handleClick(item)}
        >
          {item}
          <span
            className={`absolute left-0 bottom-0 h-[2px] bg-[#18AD76] transition-all duration-300 ${
              selected === item ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </a>
      ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="tablet:hidden text-[#18AD76]  p-2 rounded-full hover:bg-gray-200 transition duration-300"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

  
      {isOpen && (
        <div className="fixed inset-0  z-40" onClick={() => setIsOpen(false)} />
      )}

      
      <div
        className={`tablet:hidden bg-white shadow-lg absolute w-full transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[350px] opacity-100 py-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 space-y-6 text-gray-800 text-lg">
          <a href="/" className="block   transition duration-300">All Matched</a>
          <a href="#" className="block   transition duration-300">New Joining</a>
          <a href="#" className="block   transition duration-300">Nearby Matches</a>
          <a href="#" className="block   transition duration-300">Viewed You</a>
          <a href="#" className="block   transition duration-300">Shortlisted You</a>
          <a href="#" className="block   transition duration-300">Viewed By You</a>
          {/* <a href="#" className="block   transition duration-300">Mutual Matches</a> */}
        </div>
      </div>
    </nav>
  );
}
