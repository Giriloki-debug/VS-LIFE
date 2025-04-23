export default function Our() {

  const travelInsuranceBenefits = [
    "Covers emergency medical expenses, including hospitalization and doctor visits during travel.",
    "Provides trip cancellation and interruption coverage, ensuring you don't bear the full financial loss.",
    "Offers lost baggage and travel document assistance, helping you recover quickly in case of travel disruptions.",
    "Provides coverage for trip delays, offering compensation for additional accommodation or transport expenses.",
    "Includes 24/7 global assistance, ensuring support wherever you are during your travels."
  ];

  return (
    <div className="text-justify w-full flex flex-col laptop:flex-row laptop:items-start gap-[40px] py-[30px] px-[30px] ">
      <div className="flex flex-col gap-[30px] min-w-[300px] max-w-[800px]">
        <div className="flex gap-[20px] ">
          <h1 className="text-3xl ">Benefits of Tata AIA Travel Insurance</h1>
        </div>

        <ul className="list-none">
          {travelInsuranceBenefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-[20px] mb-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[40px] h-[40px] text-[#0277BD]"
                viewBox="0 0 48 48"
                enableBackground="new 0 0 48 48"
              >
                <circle cx="24" cy="24" r="21" fill="#E1F5FE" />
                <path
                  d="M24,46C11.869,46,2,36.131,2,24S11.869,2,24,2c6.219,0,12.175,2.65,16.342,7.271 c0.186,0.205,0.169,0.521-0.036,0.706c-0.206,0.185-0.522,0.168-0.706-0.036C35.622,5.53,29.937,3,24,3C12.421,3,3,12.42,3,24 s9.421,21,21,21s21-9.42,21-21c0-2.299-0.369-4.56-1.098-6.72c-0.089-0.262,0.052-0.545,0.313-0.633 c0.268-0.088,0.546,0.052,0.634,0.314C45.613,19.224,46,21.592,46,24C46,36.131,36.131,46,24,46z"
                  fill="#0277BD"
                />
                <path
                  d="M21.584,33.834c0.892,0.888,2.438,0.888,3.331,0l19.387-19.309c0.931-0.926,0.931-2.433,0-3.359 c-0.892-0.888-2.438-0.888-3.33,0L24.007,28.061c-0.399,0.398-1.116,0.398-1.516,0l-6.463-6.436 c-0.446-0.444-1.037-0.688-1.665-0.688s-1.22,0.244-1.665,0.688c-0.931,0.926-0.931,2.433,0,3.359L21.584,33.834z"
                  fill="#64FFDA"
                />
              </svg>
              <p className="font-ubuntu text-lg text-[#454d5d]">{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
