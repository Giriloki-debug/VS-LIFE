// import { useRef } from "react";
// import VariableProximity from "./Hover";

import { TextField } from "@mui/material";

function Demos() {
  // const containerRef = useRef(null);

  return (
    <div className="">
      ref={containerRef}
      className="flex flex-col items-center justify-center p-10 border rounded-lg hover:bg-gray-100 transition-all duration-300">
      <VariableProximity
        label={"Hover me! And then star React Bits on GitHub, or else..."}
        className={"text-2xl font-semibold"}
        fromFontVariationSettings="'wght' 4000, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={100}
        falloff="linear"/>

      {/* <form
        className="flex flex-col justify-between border-[2px] h-[300px] shadow-xl w-[400px] rounded-2xl p-[48px]"
        action=""
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-700">BILL NO : </h2>
          <TextField
            required
            // type="number"
            id="outlined-basic"
            label="BILL NO"
            variant="outlined"
            name="billNo"
            className="w-[200px]"
            // value={getData.billNo}
            // onChange={ChangeHandler}
          />
        </div>
        <div className="flex justify-between items-center ">
          <h2 className="text-xl font-bold text-gray-700">DATE : </h2>
          <TextField
            required
            type="date"
            id="outlined-basic"
            // label="UOM"
            variant="outlined"
            name="purchaseDate"
            className="w-[200px]"
            // value={getData.purchaseDate}
            // onChange={ChangeHandler}
          />
        </div>
        <button
          type="submit"
          className="border-[1px] w-[80px] mx-auto text-lg text-white bg-[#217BD4] rounded-2xl p-2 font-semibold cursor-pointer"
        >
          Submit
        </button>
      </form> */}
    </div>
  );
}

export default Demos;
