import RotatingText from './Rotatingtext'
function Demo()
{

  
   
    return(<>
    <div className=""> <div className='w-[200px] flex text-center justify-center font-black text-2xl '>
    <h6 className='justify-center items-center text-center mt-2 mr-2'>HI</h6>
        <RotatingText
        texts={["GIRI..","hELLO"]}
        mainClassName="font-black px-2 mobile:px-2 tablet:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 mobile:py-1 tablet:py-2 justify-center rounded-lg"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.030}
        splitLevelClassName="overflow-hidden pb-0.5 mobile:pb-1 tablet:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
       
        
      /></div>




</div></>);
}
export default Demo;