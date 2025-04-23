
import { useEffect, useState } from "react";
import img1 from "./assets/cover/img1.jpg"
import img2 from "./assets/cover/img2.jpg"
import img3 from "./assets/cover/img3.jpg"
import img4 from "./assets/cover/img4.jpg"
import img5 from "./assets/cover/img5.png"


const data =[{id:1,name:"Giri",age:20,img:img1},{id:2,name:"kiri",age:26,img:img2},{id:3,name:"hari",age:22,img:img3},{id:4,name:"jeeva",age:26,img:img4},{id:5,name:"John",age:26,img:img5}]
const fruit=["apple","orange","banana"]
function Demo2()
{
const [text,setText] =useState()
const [id,setid] =useState(0)
const [user,setUser]=useState(data)

useEffect(()=>{
  console.log("name:",text);
  setUser(user.map(user=>({...user,name:text})));
  
},[text]);

    return(
        <div>
            <p>Hello</p>
            <form action="text">
        <input type="text" onChange={(e)=>setText(e.target.value)}/>Form
        <input type="number" onChange={(e)=>setid(e.target.value)}/>id</form>
           <p>{text}</p>
     {/* <div>{data.map((data)=>(<div key={data.id}> <p >{data.name}</p> <p>{data.age}</p> </div>))}</div> */}
     {user.map((user)=>(<div key={user.id} className="flex gap-10 font-bold">{user.id==id&&<p>{user.name}</p> }<p>{user.age}</p> {user.id}
     <img src={user.img} alt="" className="flex w-20"/></div>))}
     <div>{fruit.map((fruit,index)=>(<div key={index}><li>{fruit}</li></div>))}</div>
        </div>
        
        );
    }                     
    export default Demo2