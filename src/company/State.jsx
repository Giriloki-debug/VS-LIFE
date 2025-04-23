import { useEffect, useState } from "react"
import {db} from "../Firebase"
import { addDoc, collection, getDocs } from "firebase/firestore"
export default function State() {

const [task,setTask]=useState([])
const [items,setItems]=useState([])

const addItems=async()=>
{
    const id="Hello"
    await addDoc(collection(db,"todo"),{id,todo:task})
     setTask("");
    fetchItems();
}
const fetchItems=async()=>

    {
        const querySnapshot = await getDocs(collection(db, "todo"));
        const itemsList=querySnapshot.docs.map((doc)=>({id:doc.id,...doc.data()}))
        setItems(itemsList)
    }

    useEffect(()=>
    { fetchItems();

    },[])
  return (
    <div>
    <input type="text" name="todo" onChange={(e)=>setTask(e.target.value)} value={task} onKeyDown={(e)=>{if(e.key==="Enter")
        {
            addItems();
        }
    }}/>
   
    <button onClick={addItems}>ADD</button>

    <ul>
        {items.map((item)=>
        <li key={item.id}>{item.todo}</li>)}
    </ul>
    </div>
    
  )
}
