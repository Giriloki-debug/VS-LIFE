import lb from "./assets/wish/lb.svg"
export default function Premium() {
    return (
      <div className="container mx-auto my-[50px]">
        <div className="flex flex-col gap-[15px] items-center">
          <h1 className="text-4xl font-semibold">
          Factors That Affect Life Insurance Premiums
          </h1>
          <p className="text-xl text-gray-600 font-semibold">
          The following factors can affect your life insurance premiums:
          </p>
          <div className="grid  grid-cols-1 laptop:grid-cols-2 gap-[20px] justify-center items-center">
            <div className=" max-w-[600px] min-[150px] px-[15px] py-[10px] border-2 border-blue-300 rounded-2xl bg-[#F0FFFF] hover:drop-shadow-xl ">
              <div className="flex flex-col gap-[15px] items-center justify-center w-full p-[18px]">
                <div className="flex gap-[10px] ">
                  <div className="  ">
                  <h1 className="font-black text-4xl">01</h1>
                  
                  </div>
                  <div  className="">
                  <div>
                    <h3 className="font-bold text-2xl ">
                    The sum assured
                    </h3>
                  </div>
              
                <div>
                  <p className="text-lg text-justify">
                  Choosing a high life insurance sum assured means higher policy premiums. However, this does not mean you should opt for inadequate life insurance coverage. Select a coverage amount to help you pay manageable premiums is good.
                  </p>
                </div>
                </div>
              </div>
            </div></div>
            <div className=" max-w-[600px] min-[150px] px-[15px] py-[10px] border-2 border-blue-300 rounded-2xl bg-[#F0FFFF] hover:drop-shadow-xl ">
              <div className="flex flex-col gap-[15px] items-center justify-center w-full p-4">
                <div className="flex gap-[10px] ">
                  <div className="  ">
                  <h1 className="font-black text-4xl">02</h1>
                  
                  </div>
                  <div  className="">
                  <div>
                    <h3 className="font-bold text-2xl ">
                    Your age
                    </h3>
                  </div>
              
                <div>
                  <p className="text-lg text-justify">
                  Most people buy life insurance when they start working. By purchasing a policy at a young age, you can ensure affordable premium payments since you will likely be healthier during your youth. Buying life insurance at an older age means higher premiums.
              </p>  </div>
                </div>
              </div>
            </div></div>
            <div className=" max-w-[600px] min-[150px] px-[15px] py-[10px] border-2 border-blue-300 rounded-2xl bg-[#F0FFFF] hover:drop-shadow-xl ">
              <div className="flex flex-col gap-[15px] items-center justify-center w-full p-[30px]">
                <div className="flex gap-[10px] ">
                  <div className="  ">
                  <h1 className="font-black text-4xl">03</h1>
                  
                  </div>
                  <div  className="">
                  <div>
                    <h3 className="font-bold text-2xl ">
                    
Your gender
                    </h3>
                  </div>
              
                <div>
                  <p className="text-lg text-justify">
                  Life insurance premiums vary as per your gender, as men and women tend to have different health risks at different stages of their lives. For instance, men are generally more prone to heart conditions than women.
                  </p>
                </div>
                </div>
              </div>
            </div></div>
            <div className=" max-w-[600px] min-[150px] px-[15px] py-[10px] border-2 border-blue-300 rounded-2xl bg-[#F0FFFF] hover:drop-shadow-xl ">
              <div className="flex flex-col gap-[15px] items-center justify-center w-full p-4">
                <div className="flex gap-[10px] ">
                  <div className="  ">
                   <h1 className="font-black text-4xl">04</h1>
                  
                  </div>
                  <div  className="">
                  <div>
                    <h3 className="font-bold text-2xl ">
                    Medical history
                    </h3>
                  </div>
              
                <div>
                  <p className="text-lg text-justify">
                  Your medical history or any previous illnesses in your family can influence your premiums. If you still have any health conditions due to any past ailments, it is likely that you will be paying a higher premium than someone with no medical history.
                  </p>
                </div>
                </div>
              </div>
            </div></div>
            <div className=" max-w-[600px] min-[150px] px-[15px] py-[10px] border-2 border-blue-300 rounded-2xl bg-[#F0FFFF] hover:drop-shadow-xl ">
              <div className="flex flex-col gap-[15px] items-center justify-center w-full p-4">
                <div className="flex gap-[10px] ">
                  <div className="  ">
                  <h1 className="font-black text-4xl">05</h1>
                  
                  </div>
                  <div  className="">
                  <div>
                    <h3 className="font-bold text-2xl ">
                    Lifestyle habits
                    </h3>
                  </div>
              
                <div>
                  <p className="text-lg text-justify">
                  People with healthy lifestyles tend to have healthier bodies and fewer ailments. This means their life insurance premiums are also lower. But if you have smoking or drinking habits, your life insurance provider will fix a higher premium rate for you.
                  </p>
                </div>
                </div>
              </div>
            </div></div>
            <div className=" max-w-[600px] min-[150px] px-[15px] py-[10px] border-2 border-blue-300 rounded-2xl bg-[#F0FFFF] hover:drop-shadow-xl ">
              <div className="flex flex-col gap-[15px] items-center justify-center w-full p-8">
                <div className="flex gap-[10px] ">
                  <div className="  ">
                  <h1 className="font-black text-4xl">06</h1>
                  
                  </div>
                  <div  className="">
                  <div>
                    <h3 className="font-bold text-2xl ">
                    Your occupation
                    </h3>
                  </div>
              
                <div>
                  <p className="text-lg text-justify">
                  If you have a desk job involving no physical risk, this factor will be considered for your premium calculation. However, your premiums will be higher if you work in mining, construction, etc.
                  </p>
                </div>
                </div>
              </div>
            </div></div>
      </div>
      </div><img src={lb}alt="" /></div>
    );
  }
  