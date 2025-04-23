import Eligibility from "./eligibility1.jsx";
import Plans from "./lifeplans1.jsx";
import Our from "./Our1.jsx";
import img1 from "../assets/travel/img1.png";
import banner from "../assets/travel/banner.webp";
import banner1 from "../assets/travel/banner1.jpeg";

export default function Content() {
  return (
    <div className="container mx-auto my-[50px]">
      <div className="bg-[#F0FFFF] p-[45px] my-[30px] rounded-2xl border-2 border-blue-300">
        <div className="flex flex-col my-[30px] gap-[15px] px-[20px] items-center">
          <h1 className="text-3xl font-semibold ">
            Tata AIA Travel Insurance
          </h1>
          <h2 className="text-xl text-gray-600 font-semibold">
            Individual, Non-Linked, Non-Participating, General Insurance Savings Plan
          </h2>
          <p className="text-lg text-justify">
          Life is full of adventures, but it’s also filled with uncertainties. Tata AIA Travel Insurance helps protect you and your loved ones while you’re exploring the world, covering a range of risks such as trip cancellations, medical emergencies, baggage loss, and flight delays. Whether you’re traveling for business or leisure, Tata AIA ensures that you stay financially secure against unexpected situations, no matter where you are. This plan offers comprehensive coverage for both domestic and international travel, ensuring peace of mind and financial support in case of unforeseen events during your journey. Stay safe, travel smart, and protect your trip with Tata AIA Travel Insurance.
          </p>
        </div>
        <hr />
        <div className="flex flex-col-reverse gap-[20px] laptop:flex-row my-[30px] px-[20px] justify-around items-center ">
        <div className="flex flex-col gap-[15px] py-[10px] items-center">
  <h1 className="text-3xl font-semibold">Key Features</h1>
  <p className="text-lg text-justify">
    <li>Comprehensive travel protection for domestic and international journeys</li>
    <ul className="ml-[35px]">
      <li className="list-['-']">Coverage for medical emergencies and hospitalization</li>
      <li className="list-['-']">Trip cancellation and interruption protection</li>
    </ul>
    <li>Lost baggage and delayed baggage coverage</li>
    <li>Flight delay compensation</li>
    <li>Option to choose between a single-trip or annual multi-trip plan</li>
    <li>Personal accident coverage and loss of passport protection</li>
    <li>24/7 emergency assistance while traveling</li>
    <li>Global network of healthcare providers for cashless medical assistance</li>
    <li>Easy claim process and fast reimbursement</li>
  </p>
</div>

          <div>
            <img className=" rounded-xl w-[600px]" src={img1} />
          </div>
        </div>
        <hr />
        <div className="flex flex-col my-[30px] gap-[15px] px-[20px] items-center">
          <div className="flex flex-col gap-[15px] py-[10px] items-center">
            <h1 className="text-3xl font-semibold">Eligibility Criteria</h1>
            <div className="flex flex-col text-justify gap-[10px] items-center">
              <h2 className="text-xl text-gray-600 font-semibold">Plan Options</h2>
              <div className="ml-[30px] ">
                <li>
                  Regular Income with an inbuilt Critical Illness benefit. The options can be chosen only at the inception of the Policy.
                </li>
                <li>Regular Income</li>
              </div>
            </div>
            <Eligibility />
          </div>
        </div>
      </div>
      <div>
        <img src={banner} className="w-full rounded-3xl" />
      </div>
      <div className="bg-[#F0FFFF] p-[45px] my-[30px] rounded-2xl border-2 border-blue-300">
        <div className="flex flex-col my-[30px] gap-[15px] px-[20px] items-center">
          <div className="flex flex-col gap-[35px]">
            <div>
              <Our />
            </div>
            <div>
              <img src={banner1} className="rounded-3xl w-full" />
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
                  You have the option to pay the premiums either in Single Premium, Annually, Half-yearly, Quarterly, or Monthly modes. Loading on premiums will be applicable as mentioned in the table below:
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
      {/* Section Title and Description */}
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-xl text-gray-600 font-semibold">Optional Riders:</h2>
        <p>
          Enhance your travel insurance coverage with the following optional riders. These additional riders are available for a small extra premium, allowing you to customize your travel insurance policy to suit your specific needs.
        </p>
      </div>

      {/* List of Optional Riders */}
      <div className="flex flex-col gap-[10px] ml-[30px]">
        <ul className="list-disc text-gray-600">
          <li>
            Tata AIA Travel Insurance Flight Delay Coverage (UIN: 110B053V01 or any later version)
          </li>
          <li>
            Tata AIA Travel Insurance Lost Baggage Protection (UIN: 110B054V01 or any later version)
          </li>
          <li>
            Tata AIA Travel Insurance Trip Cancellation Coverage (UIN: 110B055V01 or any later version)
          </li>
          <li>
            Tata AIA Travel Insurance Medical Evacuation Coverage (UIN: 110B056V01 or any later version)
          </li>
        </ul>
      </div>

      {/* Additional Information */}
      <div>
        <p>
          These riders can be attached to your travel insurance policy at the time of purchase or upon renewal. The availability and terms of these riders may vary based on your policy type and the country of coverage. Please review your policy and discuss with your advisor for more details. Note that for policies purchased via the POS channel, some riders may not be available.
        </p>
      </div>
    </div>
          </div>
        </div>
      </div>
      <div className="my-[30px] p-[10px]">
        <div>
          <Plans />
        </div>
      </div>
      <div className="p-[25px] my-[30px] rounded-2xl "></div>
    </div>
  );
}
