import img1 from "./assets/cover/img1.jpg";
import img2 from "./assets/cover/img2.jpg";
import img3 from "./assets/cover/img3.jpg";
import img4 from "./assets/cover/img4.jpg";
import img5 from "./assets/cover/img5.png";
import img6 from "./assets/cover/img6.svg";
export default function Cover() {
    return (
      <div className="container mx-auto my-[50px]">
        <div className="flex flex-col gap-[15px] items-center">
          <h1 className="text-4xl font-semibold">
          How Much Life Insurance Cover Do You Need?
          </h1>
          <p className="text-xl text-gray-600 font-semibold">
          Calculating your life insurance coverage can be a detailed but simple process once you know more about it. Here is what you need to consider when computing the life insurance coverage needed:
          </p>
          <div className="grid  grid-cols-1 laptop:grid-cols-2 gap-[20px] justify-center items-center">
            <div className=" max-w-[600px] min-[150px] px-[15px] py-[10px] border-2 border-blue-300 rounded-2xl bg-[#F0FFFF] hover:drop-shadow-xl ">
              <div className="flex flex-col gap-[15px] items-center justify-center w-full p-4">
                <div className="flex gap-[10px] ">
                  <div className="  ">
                   <img src={img1} alt="" className=" w-[300px] rounded-full"/>
                  
                  </div>
                  <div  className="">
                  <div>
                    <h3 className="font-bold text-3xl ">
                    Your family’s needs 
                    </h3>
                  </div>
              
                <div>
                  <p className="text-lg text-justify">
                  Life insurance can help cover major financial events in your life. Hence, even when you are not around, your family should be able to meet all their goals and fulfil their dreams. Also decide on a coverage that will handle their smallest needs
                  </p>
                </div>
                </div>
              </div>
            </div></div>
            <div className=" max-w-[600px] min-[150px] px-[15px] py-[10px] border-2 border-blue-300 rounded-2xl bg-[#F0FFFF] hover:drop-shadow-xl ">
              <div className="flex flex-col gap-[15px] items-center justify-center w-full p-4">
                <div className="flex gap-[10px] ">
                  <div className="  ">
                   <img src={img2}alt="" className="  w-[300px] rounded-full"/>
                  
                  </div>
                  <div  className="">
                  <div>
                    <h3 className="font-bold text-3xl ">
                    Your financial capacity
                    </h3>
                  </div>
              
                <div>
                  <p className="text-lg text-justify">
                  Your current income will decide the life insurance coverage your family needs. The coverage should be at least 10 to 20 times your annual income. Your financial capacity is also important when it comes to making reasonable premium payments.
                  </p>
                </div>
                </div>
              </div>
            </div></div>
            <div className=" max-w-[600px] min-[150px] px-[15px] py-[10px] border-2 border-blue-300 rounded-2xl bg-[#F0FFFF] hover:drop-shadow-xl ">
              <div className="flex flex-col gap-[15px] items-center justify-center w-full p-4">
                <div className="flex gap-[10px] ">
                  <div className="  ">
                   <img src={img3}alt="" className="  w-[300px] rounded-full"/>
                  
                  </div>
                  <div  className="">
                  <div>
                    <h3 className="font-bold text-3xl ">
                    Income replacement
                    </h3>
                  </div>
              
                <div>
                  <p className="text-lg text-justify">
                  If a person in the society are the sole earning member of your family, your income supports your family. When you cannot provide for them, your life insurance should offer financial assistance to them at least equal to your monthly income.
                  </p>
                </div>
                </div>
              </div>
            </div></div>
            <div className=" max-w-[600px] min-[150px] px-[15px] py-[10px] border-2 border-blue-300 rounded-2xl bg-[#F0FFFF] hover:drop-shadow-xl ">
              <div className="flex flex-col gap-[15px] items-center justify-center w-full p-4">
                <div className="flex gap-[10px] ">
                  <div className="  ">
                   <img src={img4} alt="" className="  w-[230px] rounded-full"/>
                  
                  </div>
                  <div  className="">
                  <div>
                    <h3 className="font-bold text-3xl ">
                    Loans and debts 
                    </h3>
                  </div>
              
                <div>
                  <p className="text-lg text-justify">
                  Unpaid loans can eat into life insurance coverage. Hence, it is better to pay them off as early as possible. But in the event of your death, life insurance can ensure that your family does not suffer under the burden of these unpaid debts.
                  </p>
                </div>
                </div>
              </div>
            </div></div>
            <div className=" max-w-[600px] min-[150px] px-[15px] py-[10px] border-2 border-blue-300 rounded-2xl bg-[#F0FFFF] hover:drop-shadow-xl ">
              <div className="flex flex-col gap-[15px] items-center justify-center w-full p-4">
                <div className="flex gap-[10px] ">
                  <div className="  ">
                   <img src={img5} alt="" className="  w-[300px] rounded-full "/>
                  
                  </div>
                  <div  className="">
                  <div>
                    <h3 className="font-bold text-3xl ">
                    Medical emergencies
                    </h3>
                  </div>
              
                <div>
                  <p className="text-lg text-justify">
                  It is always prudent to set aside some life insurance coverage for future medical emergencies for your family. This will enable them to get the quality healthcare required in your absence. Also, consider future inflation rates when considering this amount.
                  </p>
                </div>
                </div>
              </div>
            </div></div>
            <div className=" max-w-[600px] min-[150px] px-[15px] py-[10px] border-2 border-blue-300 rounded-2xl bg-[#F0FFFF] hover:drop-shadow-xl ">
              <div className="flex flex-col gap-[15px] items-center justify-center w-full p-8">
                <div className="flex gap-[10px] ">
                  <div className="  ">
                   <img src={img6} alt="" className=" w-[200px] h-[]"/>
                  
                  </div>
                  <div  className="">
                  <div>
                    <h3 className="font-bold text-3xl ">
                    Changes in Life Stage 
                    </h3>
                  </div>
              
                <div>
                  <p className="text-lg text-justify">
                  Your life insurance cover should meet your long-term financial requirements. With change in life stage such as marriage or childbirth it should provide adequate support in case of any unfortunate events.
                  </p>
                </div>
                </div>
              </div>
            </div></div>
      </div>
      </div></div>
    );
  }
  