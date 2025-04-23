import { useEffect, useRef } from "react";

import Pay from "./assets/wish/Pay.svg";
import Download from "./assets/wish/Download.svg";
import Register from "./assets/wish/Register.svg";
import Raise from "./assets/wish/Raise.svg";
import Other from "./assets/wish/Other.svg";
import Whatsapp from "./assets/wish/Whatsapp.svg";
import happy from "./assets/wish/happy.png";
import mar from "./assets/wish/mar.png";

const Wish = () => {
  const WishRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.dataset.animation);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    WishRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      WishRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  const cardData = [
    { img: Pay, text: "Pay Premium" },
    { img: Download, text: "Download Statement",  },
    { img: Register, text: "Register Claim", },
    { img: Raise, text: "Raise Request",  },
    { img: Other, text: "Others Service",  },
    { img: Whatsapp, text: "Pay Premium",  },
    // { img: img7, text: "Recurrent Miscarriages", delay: "delay-700", animateClass: "animate-slideLeft" },
    // { img: img8, text: "Laparoscopy", delay: "delay-800", animateClass: "animate-slideLeft" },
  ];

  return (
    <><h1 className="text-4xl mb-4 font-bold container mx-auto">
    I am a happy member
   </h1>
    <div className="w-full flex justify-center py-12 container mx-auto">
      
           <div className="flex flex-col laptop:flex-row">
             <div className=" ">
             <img src={happy} className="h-[400px]  w-[700px]"/>
             
             </div>
      <div className="w-full desktop:w-3/5 flex flex-wrap gap-8 justify-center pt-5">
        {cardData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (WishRef.current[index] = el)}
            data-animation={item.animateClass}
            className={`h-[145px] w-[180px] rounded-lg flex flex-col justify-around items-center shadow-lg shadow-slate-300 bg-white ${item.delay}`}
          >
            <img
              src={item.img}
              alt={item.text}
              className="h-[75px] w-[75px] "
            />
            <h1 className="text-lg font-bold text-[#f1889a]">
              {item.text}
            </h1>
          </div>
        ))}
      </div>
    </div>
    </div><div><img src={mar} alt="" className="container mx-auto" /></div></>
  );
};

export default Wish;
