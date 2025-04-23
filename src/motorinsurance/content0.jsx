import Eligibility from "./eligibility0.jsx";
import Plans from "./lifeplans0.jsx";
import  Our  from "./Our0.jsx";
import img1 from "../assets/motor/img1.jpeg"
import banner from "../assets/motor/banner.jpeg"
import banner1 from "../assets/motor/banner1.jpeg"

export default function Content() {
  return (
    <div className="container mx-auto my-[50px]">
      <div className="bg-[#F0FFFF] p-[45px] my-[30px] rounded-2xl border-2 border-blue-300">
        <div className="flex flex-col my-[30px] gap-[15px] px-[20px]  items-center">
          <h1 className="text-3xl  font-semibold ">
            Tata AIA Motor Insurance Fortune Guarantee Plus
          </h1>
          <h2 className="text-xl text-gray-600 font-semibold">
            Individual, Non-Linked, Non-Participating, Motor Insurance Savings
            Plan
          </h2>
          <p className="text-lg text-justify">
          Time never stands still, and neither do our transportation needs. As we move through various stages of life, the requirements for our vehicles and those of our families evolve continuously. Along with this, we also face the uncertainty of accidents, theft, or damage.

We do our best to protect our loved ones and ensure their safety while on the road, but unforeseen events can create financial burdens. Motor insurance is the best way to safeguard your family from the financial strain of accidents or damages and ensure peace of mind while driving.

This plan provides financial protection for your vehicle and liability coverage, giving you the confidence to focus on your journey. With comprehensive motor insurance, you can secure the future of your travels and ensure protection for your loved ones.


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
             <li>Flexible coverage period: Choose a policy term that fits your needs.</li>
              <li>No-Claim Bonus: Get discounts for every claim-free year.</li>
               <li>Flexible premium payments: Pay monthly, quarterly, or annually.</li>
                <li>Comprehensive coverage: Protect against theft, damage, and accidents with add-ons like zero depreciation</li>
                 <li>Optional add-ons: Enhance your policy with roadside assistance or engine protection.</li>
                  <li>Third-party liability: Stay compliant and cover third-party damages or injuries.</li>
                   <li>Tax benefits: Save with tax advantages as per laws.  </li> 
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
        <img src={banner} className=" rounded-3xl"/>
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
      Additional Benefits and Features of Motor Insurance
    </h1>
  </div>
  <div className="flex flex-col gap-[10px]">
    <h2 className="text-xl text-gray-600 font-semibold">
      Flexible premium payment modes:
    </h2>
    <p>
      You have the option to pay the premiums through Single Premium, Annually,
      Half-yearly, Quarterly, or Monthly modes. Additional premium loading will
      apply as per the terms outlined below:
    </p>
  </div>
</div>
<div className="flex flex-col gap-[10px]">
  <div className="flex flex-col gap-[10px]">
    <h2 className="text-xl text-gray-600 font-semibold">
      Optional Add-ons:
    </h2>
    <p>
      You have the flexibility to enhance your motor insurance coverage by
      adding the following optional add-ons by paying an additional premium on
      top of your base policy premium.
    </p>
  </div>
  <div className="flex flex-col gap-[10px] ml-[30px]">
    <li>
      Zero Depreciation Add-on: Covers the full value of your vehicle's parts
      in case of damage without depreciation deductions.
    </li>
    <li>
      Roadside Assistance Add-on: Offers support in case of a vehicle breakdown
      by providing emergency towing, repairs, or other services.
    </li>
    <li>
      Engine and Gearbox Protection Add-on: Covers damage to the engine and
      gearbox due to water ingression or oil leakage.
    </li>
    <li>
      Key Replacement Add-on: Covers the cost of replacing lost or stolen keys
      for your vehicle.
    </li>
  </div>
  <div>
    <p>
      These add-ons can be applied at the time of policy inception or upon
      policy renewal, depending on the terms of your base policy. Please note
      that add-ons are available subject to additional premium payments. For
      policies purchased through certain channels, add-ons might not be
      available.
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
