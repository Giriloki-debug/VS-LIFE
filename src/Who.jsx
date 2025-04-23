import img1 from "./assets/who/img1.jpg";
import img2 from "./assets/who/img2.jpg";
import img3 from "./assets/who/img3.jpg";
import img4 from "./assets/who/img4.png";
import img5 from "./assets/who/img5.jpg";
import img6 from "./assets/who/img6.png";
export default function Who() {
    return (
      <div className="container mx-auto my-[50px]">
        <div className="flex flex-col gap-[15px] items-center">
          <h1 className="text-3xl font-bold">
           Who Need Life Insurance?
          </h1>
          <p className="text-xl text-gray-600 font-bold">
          Life insurance is important for everyone, irrespective of age, profession, and lifestyle. These are the broad categories of individuals who should have life insurance:
          </p>
          <div className="grid  grid-cols-1 laptop:grid-cols-2 gap-[20px] justify-center items-center">
            <div className="max-w-[600px] min-[150px] px-[15px] py-[10px] border-2 border-blue-300 rounded-2xl bg-[#F0FFFF] hover:drop-shadow-xl ">
              <div className="flex flex-col gap-[15px] items-center justify-center w-full ">
                <div className="flex gap-[10px] justify-center items-center">
                  <div className="w-1/2  ">
                   <img src={img1} alt="" className=" rounded-full "/>
                  
                  </div>
                  <div  className="w-1/2">
                  <div>
                    <h3 className="text-2xl font-bold ">
                    Working Professionals
                    </h3>
                  </div>
              
                <div>
                  <p className="text-lg text-justify">
                  At a young age when you just join the workforce, you can avail of lower premiums. Salaried individuals with life insurance can provide extensive financial coverage for their loved ones without letting expensive premiums affect their other expenses.
                  </p>
                </div>
                </div>
              </div>
            </div></div>
            <div className="max-w-[600px] min-[150px] px-[15px] py-[10px] border-2 border-blue-300 rounded-2xl bg-[#F0FFFF] hover:drop-shadow-xl">
              <div className="flex flex-col gap-[15px] items-center justify-center w-full ">
                <div className="flex gap-[10px] justify-center items-center">
                  <div className="w-1/2">
                   <img src={img2} alt="" className="rounded-full"/>
                  
                  </div>
                  <div  className="w-1/2">
                  <div>
                    <h3 className="text-2xl font-bold ">
                      
Newly-Weds
                    </h3>
                  </div>
              
                <div>
                  <p className="text-lg text-justify">
                  Married couples tend to have greater financial responsibilities, such as loans for buying a new home, car, or household items. A life insurance policy with joint coverage covers both partners under a single plan for better management.
                  </p>
                </div>
                </div>
              </div>
            </div></div>
            <div className="max-w-[600px] min-[150px] px-[15px] py-[10px] border-2 border-blue-300 rounded-2xl bg-[#F0FFFF] hover:drop-shadow-xl">
              <div className="flex flex-col gap-[15px] items-center justify-center w-full ">
                <div className="flex gap-[10px] justify-center items-center">
                  <div className="w-1/2">
                  <img src={img3} alt="" className=" rounded-full "/>
                  
                  </div>
                  <div  className="w-1/2">
                  <div>
                    <h3 className="text-2xl font-bold ">
                    Working Parents
                    </h3>
                  </div>
              
                <div>
                  <p className="text-lg text-justify">
                  If either or both parents are earning, life insurance is important. This is essential since a family with a child/children means more financial responsibilities. Life insurance or a child plan can help the parents cover various financial risks.

                  </p>
                </div>
                </div>
              </div>
            </div></div>
            <div className="max-w-[600px] min-[150px] px-[15px] py-[10px] border-2 border-blue-300 rounded-2xl bg-[#F0FFFF] hover:drop-shadow-xl">
              <div className="flex flex-col gap-[15px] items-center justify-center w-full ">
                <div className="flex gap-[10px] justify-center items-center">
                  <div className="w-1/2">
                  <img src={img4} alt="" className=" rounded-full "/>
                  
                  </div>
                  <div  className="w-1/2">
                  <div>
                    <h3 className="text-2xl font-bold ">
                    Homemakers
                    </h3>
                  </div>
              
                <div>
                  <p className="text-lg text-justify">
                  Life insurance is important for stay-at-home moms and homemakers. In case of the death of the lady of the house, the life insurance coverage should be able to help the rest of the family sustain themselves and find help to manage the home.
                  </p>
                </div>
                </div>
              </div>
            </div></div>
            <div className="max-w-[600px] min-[150px] px-[15px] py-[10px] border-2 border-blue-300 rounded-2xl bg-[#F0FFFF] hover:drop-shadow-xl">
              <div className="flex flex-col gap-[15px] items-center justify-center w-full ">
                <div className="flex gap-[10px] justify-center items-center">
                  <div className="w-1/2">
                  <img src={img5} alt="" className=" rounded-full "/>
                  
                  </div>
                  <div  className="w-1/2">
                  <div>
                    <h3 className="text-2xl font-bold ">
                    Retired Individuals
                    </h3>
                  </div>
              
                <div>
                  <p className="text-lg text-justify">
                  During your retirement years, a life insurance plan can help replace your salary. Here, retirement insurance plans can offer regular income, which makes it easier for you to take care of yourself and your family.
                  </p>
                </div>
                </div>
              </div>
            </div></div>
            <div className="max-w-[600px] min-[150px] px-[15px] py-[10px] border-2 border-blue-300 rounded-2xl bg-[#F0FFFF] hover:drop-shadow-xl">
              <div className="flex flex-col gap-[15px] items-center justify-center w-full ">
                <div className="flex gap-[10px] justify-center items-center">
                  <div className="w-1/2">
                  <img src={img6} alt="" className=" rounded-full "/>
                  
                  </div>
                  <div  className="w-1/2">
                  <div>
                    <h3 className="text-2xl font-bold ">
                      
Business persons
                    </h3>
                  </div>
              
                <div>
                  <p className="text-lg text-justify">
                  Starting a business venture can consume your savings. You may also need to take a loan. Life insurance can help you secure your business and your family’s needs so that any unpaid debts do not burden them in your absence.
                  </p>
                </div>
                </div>
              </div>
            </div></div>
      </div>
      </div></div>
    );
  }
  