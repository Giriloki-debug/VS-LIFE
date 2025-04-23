import { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";

const Crud = () => {
  const [items, setItems] = useState([]);
  const [newitem, setNewitem] = useState({ id: null, name: "", age: 0, location: "" });
  const [updateMode, setUpdateMode] = useState(false);

  const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const itemsList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setItems(itemsList);
  };


  const addItem = async () => {
    if (newitem.name.trim() === "") {
      alert("Enter a valid name");
      return;
    }
    await addDoc(collection(db, "items"), { name: newitem.name, age: newitem.age, location: newitem.location });
    setNewitem({ id: null, name: "", age: 0, location: "" });
    fetchItems();
  };


  
  const updateItem = async () => {
    if (!newitem.id) return;
    const itemRef = doc(db, "items", newitem.id);
    await updateDoc(itemRef, {
      name: newitem.name,
      age: newitem.age,
      location: newitem.location,
    });
    setNewitem({ id: null, name: "", age: 0, location: "" });
    setUpdateMode(false);
    fetchItems();
  }; 
  const deleteitem=async(id)=>
  {
    await deleteDoc(doc(db,"items",id));
    fetch();
  }
  const handleChange = (e) => {
    setNewitem((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <div>
        <input type="text" name="name" value={newitem.name} onChange={handleChange} className="border-4" />
        <input type="number" name="age" value={newitem.age} onChange={handleChange} className="border-4" />
        <input type="text" name="location" value={newitem.location} onChange={handleChange} className="border-4" />
        {updateMode ? (
          <button onClick={updateItem}>UPDATE</button>
        ) : (
          <button onClick={addItem}>ADD</button>
        )}
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} {item.age} {item.location}
            <button
              onClick={() => {
                setNewitem(item);
                setUpdateMode(true);
              }}
            >
              UPDATE
            </button>
            <button onClick={()=>deleteitem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;
