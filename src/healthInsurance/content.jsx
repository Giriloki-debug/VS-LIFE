import Eligibility from "./eligibility1";
import Plans from "./lifeplans.jsx";
import  Our  from "./Our.jsx";
import img1 from "../assets/health/img1.jpeg"
import banner from "../assets/health/banner.png"
import banner1 from "../assets/health/banner1.jpeg"

export default function Content() {
  return (
    <div className="container mx-auto my-[50px]">
      <div className="bg-[#F0FFFF] p-[45px] my-[30px] rounded-2xl border-2 border-blue-300">
        <div className="flex flex-col my-[30px] gap-[15px] px-[20px]  items-center">
          <h1 className="text-3xl  font-semibold ">
            Tata AIA Health Insurance Fortune Guarantee Plus
          </h1>
          <h2 className="text-xl text-gray-600 font-semibold">
            Individual, Non-Linked, Non-Participating, Health Insurance Savings
            Plan
          </h2>
          <p className="text-lg text-justify">
            Time never stands still and neither do our financial needs. As we
            move through various stages of Health, our requirements and those of
            our families change consistently. Along with this we also carry the
            burden of any uncertainty happening. We do our best to take care of
            our family's needs and to ensure -financial security of our family
            from uncertainties of Health. Health Insurance is the best way to
            protect our family from financial crisis in case of an unfortunate
            event and help your money to grow so you can achieve your dreams.
            The plan provides financial protection for your family and
            Guaranteed Regular Income that meets tomorrow's requirements, thus
            helping you plan towards your future needs and protection for your
            loved ones
          </p>
        </div>
        <hr />
        <div className="flex flex-col-reverse gap-[20px] laptop:flex-row my-[30px] px-[20px] justify-around items-center ">
          <div className="  flex flex-col gap-[15px] py-[10px] items-center">
            <h1 className="text-3xl font-semibold">Key Features</h1>
            <p className="text-lg text-justify">
              <li>
                Flexibility to choose Plan Option
                <ul className="ml-[35px]">
                  <li className="list-['-']">Regular Income or</li>
                  <li className="list-['-']">
                    Regular Income with an inbuilt Critical Illness benefit
                  </li>{" "}
                </ul>
              </li>
             <li>Flexibility to choose the coverage period from 20 to 45 years</li> <li>Get a return of premium at the end of the coverage period</li> <li>Choice to receive benefits – Monthly/Annually</li> <li>Option for Joint Health coverage under a Single Premium payment option</li> <li>Choice of Premium Payment Term</li> <li>Enhance your protection with optional Riders (e.g., critical illness, hospital cash)</li> <li>Tax benefits as per applicable Tax Laws</li> 
          </p></div>
          <div>
            <img
              className=" rounded-xl w-full"
              src={img1}
            />
          </div>
        </div>
        <hr />
        <div className="flex flex-col my-[30px] gap-[15px] px-[20px]  items-center">
          <div className="  flex flex-col gap-[15px] py-[10px] items-center">
            <h1 className="text-3xl font-semibold">Eligibility Criteria</h1>
            <div className="flex flex-col text-justify gap-[10px] items-center">
              <h2 className="text-xl text-gray-600 font-semibold">
                Plan Options
              </h2>
              <div className="ml-[30px] ">
                <li>
                  Regular Income with an inbuilt Critical Illness benfit The
                  options can be chosen only at the inception of the Policy.
                  Only Option 1 is available for POS.
                </li>
                <li>Regular Income</li>
              </div>
            </div>
            <Eligibility />
          </div>
        </div>
      </div>
      <div>
        <img src={banner} className="w-full rounded-3xl"/>
      </div>
      <div className="bg-[#F0FFFF] p-[45px] my-[30px] rounded-2xl border-2 border-blue-300">
        <div className="flex flex-col my-[30px] gap-[15px] px-[20px]  items-center">
          <div className="flex flex-col gap-[35px]">
            <div>
              <Our />
            </div>
            <div>
              <img src={banner1} className="rounded-3xl w-full"/>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex">
                <h1 className="text-3xl font-semibold">
                  Additional Benefits and Features
                </h1>
              </div>
              <div className="flex flex-col gap-[10px]">
                <h2 className="text-xl text-gray-600 font-semibold">
                  Flexible premium payment modes:
                </h2>
                <p>
                  You have an option to pay the premiums either Single Premium,
                  Annually, Half-yearly, Quarterly and Monthly modes. Loading on
                  premiums will be applicable as mentioned in the table below:
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[10px]">
                <h2 className="text-xl text-gray-600 font-semibold">
                  Optional Riders:
                </h2>
                <p>
                  You have the flexibility to enhance your cover by adding the
                  following optional riders, by paying additional rider premium
                  over and above your base policy premium.
                </p>
              </div>
              <div className="flex flex-col gap-[10px] ml-[30px]">
                <li>
                  Tata AIA Health Insurance Non-Linked Comprehensive Protection
                  Rider (UIN: 110B033V02 or any later version)
                </li>
                <li>
                  Tata AIA Health Insurance Non-Linked Comprehensive Health Rider
                  (UIN: 110B031V02 or any other later version)
                </li>
                <li>
                  {" "}
                  Tata AIA Health Insurance Vitality Protect (UIN: 110B046V01 or
                  any later version)
                </li>
                <li>
                  Tata AIA Health Insurance Vitality Health (UIN: 110B045V01 or
                  any other later version)
                </li>
              </div>
              <div>
                <p>
                  These riders can be attached effective policy inception or any
                  policy anniversary of the base plan subject to the rider
                  premium payment term and the policy term shall not be more
                  than the outstanding premium payment term and outstanding
                  policy term for the base plan. Such attachments will be as per
                  the ‘Board approved underwriting policy’ (BAUP) of the
                  Company. For policies purchased from POS channel, riders would
                  not be available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" my-[30px]   p-[10px]">
        <div>
          <Plans />
        </div>
      </div>
      <div className=" p-[25px] my-[30px] rounded-2xl ">
       
      </div>
    </div>
  );
}
