function Home() {
    // const currentDate = new Date();
    // const formattedDate = currentDate.toLocaleDateString("en-IN", {
    //   day: "numeric",
    //   month: "short",
    //   year: "numeric",
    // });
  
    return (
      <div className="min-h-screen w-full bg-white font-sans text-gray-900">
      
        <header className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
          <div className="text-2xl font-bold text-gray-800">odoo</div>
          <div className="space-x-4">
            <button className="text-gray-700 hover:text-black">Sign in</button>
            <button className="bg-purple-800 text-white px-4 py-2 rounded">Try it free</button>
          </div>
        </header>
        <section className="text-center py-20 px-4 bg-white">
          <h1 className="text-4xl tablet:text-5xl font-semibold leading-snug">
            All your business on
            <span className="relative inline-block ml-2 mt-2">
              <span className="absolute -inset-1 -skew-y-2 bg-yellow-300 rounded px-1 "></span>
              <span className="relative font-bold italic">one platform.</span>
            </span>
          </h1>
  
          <p className="mt-6 text-2xl italic text-gray-700">
            Simple, efficient, yet{" "}
            <span className="border-b-4 border-blue-400">affordable!</span>
          </p>
  
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-purple-800 text-white px-6 py-2 text-lg rounded">
              Start now - It&apos;s free
            </button>
            <button className="border border-gray-300 px-6 py-2 text-lg rounded">
              Meet an advisor
            </button>
          </div>
  
          {/* Pricing Highlight */}
          {/* <div className="mt-8 relative flex justify-center">
            <div className="font-handwritten text-purple-800 text-lg absolute -bottom-16">
              580.00 Rs / month
              <br />
              for ALL Homes
            </div>
            <svg
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
              width="100"
              height="50"
            >
              <path
                d="M 0 50 Q 50 0 100 50"
                stroke="#6B21A8"
                fill="transparent"
                strokeWidth="2"
              />
            </svg>
          </div> */}
  
        
          {/* <div className="mt-24 bg-gray-100 inline-flex items-center px-4 py-2 rounded-full text-sm text-gray-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-lg">
         🇮🇳 Business Show: Lucknow (India) - {formattedDate}
         <button className="ml-2 text-blue-600 underline">Register →</button>
         </div> */}
        </section>
  
   
        <section className="bg-gray-200 pb-40 pt-10 px-8 desktop:rounded-t-full tablet:rounded-t-[100px]">
          <div className="grid grid-cols-2 mobile:grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-6 gap-10 max-w-6xl mx-auto">
            {[
              {
                name: "Accounting",
                img: "https://download.odoocdn.com/icons/accountant/static/description/icon.svg",
              },
              {
                name: "Knowledge",
                img: "https://download.odoocdn.com/icons/knowledge/static/description/icon.svg",
              },
              {
                name: "Sign",
                img: "https://download.odoocdn.com/icons/sign/static/description/icon.svg ",
              },
              {
                name: "CRM",
                img: "https://download.odoocdn.com/icons/crm/static/description/icon.svg",
              },
              {
                name: "Stdio",
                img: "https://download.odoocdn.com/icons/web_studio/static/description/icon.svg",
              },
              {
                name: "Subscriptions",
                img: "https://download.odoocdn.com/icons/sale_subscription/static/description/icon.svg",
              },
              {
                name: "Rental",
                img: "https://download.odoocdn.com/icons/sale_renting/static/description/icon.svg",
              },
              {
                name: "Point of sale",
                img: "https://download.odoocdn.com/icons/point_of_sale/static/description/icon.svg",
              },
              {
                name: "Discuss",
                img: "https://download.odoocdn.com/icons/point_of_sale/static/description/icon.svg",
              },
              {
                name: "Documents",
                img: "https://download.odoocdn.com/icons/documents/static/description/icon.svg",
              },
              {
                name: "Project",
                img: "https://download.odoocdn.com/icons/project/static/description/icon.svg",
              },
              {
                name: "Timesheets",
                img: "https://download.odoocdn.com/icons/hr_timesheet/static/description/icon.svg",
              },
             
            ].map(({ name, img }, index) => (
              <div key={index} className="flex flex-col items-center space-y-3">
                <div className="w-20 h-20 rounded-xl bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:-translate-y-2 transition-transform">
                  <img src={img} alt={name} className="w-10 h-10" />
                </div>
                <div className="text-sm font-medium text-center text-gray-800">{name}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
export default Home;
  