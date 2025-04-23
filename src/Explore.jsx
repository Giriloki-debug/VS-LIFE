import { useEffect, useRef } from "react";
import f1 from "./assets/explore/f1.jpeg";
import i1 from "./assets/explore/i1.jpeg";
import p1 from "./assets/explore/p1.webp";
import r1 from "./assets/explore/r1.webp";
import s1 from "./assets/explore/s1.jpeg";
import ms2 from "./assets/explore/ms2.jpg";
// import img from "./assets/card/img.jpg";


export default function Explore() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the animation class when the element is in the viewport
            entry.target.classList.add(entry.target.dataset.animation);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    // Observe each card
    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (<>
  <div className="text-center pt-10">
      <h2 className="text-4xl font-bold mb-6">I want to explore ways to</h2></div>
    <div className="container mx-auto w-full py-12 text-center flex ">
     
      <div className="flex justify-center gap-8 flex-wrap">
        {/* Card 1 */}
        <div
          
          className=" bg-white shadow-lg rounded-lg overflow-hidden p-2 border"
        >
          <img
            src={p1}
            alt="Family Future"
            className="w-[350px] h-60 object-cover rounded-md "
          />
          <h3 className="text-lg font-bold mt-4 text">Secure My Family Future</h3>
          
        </div>

        {/* Card 2 */}
        <div
        
          className=" bg-white shadow-lg rounded-lg overflow-hidden p-2 border "
        >
          <img
            src={f1}
            alt="My Child"
            className="w-[350px] h-60 object-cover rounded-md "
          />
          <h3 className="text-lg font-bold mt-4">Save My Child&apos;s Future</h3>
          
        </div>

        {/* Card 3 */}
        <div
        
          className="  bg-white shadow-lg rounded-lg overflow-hidden p-2 border "
        >
          <img
            src={i1}
            alt="My Family"
            className=" w-[350px] h-60 object-cover rounded-md "
          />
          <h3 className="text-lg font-bold mt-4">Invest For My Family&apos;s Future</h3>
          
        </div>
        <div
        
          className="  bg-white shadow-lg rounded-lg overflow-hidden p-2 border "
        >
          <img
            src={r1}
            alt="Retirement"
            className=" w-[350px] h-60 object-cover rounded-md "
          />
          <h3 className="text-lg font-bold mt-4">Have A Worry Free Retirement</h3>
          
        </div>
        <div
        
          className=" bg-white shadow-lg rounded-lg overflow-hidden p-2 border "
        >
          <img
            src={s1}
            alt="Savings"
            className="w-[350px] h-60 object-cover rounded-md "
          />
          <h3 className="text-lg font-bold mt-4">Do Goal-Based Savings</h3>
          
        </div>
      </div>
    </div>
     <div className="container mx-auto"><img src={ms2} alt="" /></div>
    </>
  );
}
