
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    name: "Whatsapp",
    href: "https://api.whatsapp.com/send?phone=+112067101079&text=Save%20this%20to%20your%20Favorites%20-%20@wilsondesouza",
    icon: <FaWhatsapp className="w-6 h-6" />,
    bgColor: "bg-green-600",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: <FaFacebookF className="w-6 h-6" />,
    bgColor: "bg-blue-700",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: <FaInstagram className="w-6 h-6" />,
    bgColor: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  },
];

const SocialIcons = () => {
  return (
    <ul className="flex justify-center items-center space-x-4">
      {socialLinks.map(({ name, href, icon, bgColor }) => (
        <li key={name} className="relative group">
          <a
            href={href}
            aria-label={name}
            className="relative flex justify-center items-center w-12 h-12 rounded-full bg-white text-gray-600 transition-all duration-300 shadow-md hover:text-white"
          >
            {icon}
            <span
              className={`absolute inset-0 h-0 w-full rounded-full transition-all duration-300 group-hover:h-full ${bgColor}`}
            ></span>
          </a>
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-md opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-top-14">
            {name}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
