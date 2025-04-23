import { db } from "./firebase-config";
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import Checkbox from "./Heart"; 
import { useState } from "react";

const Wishlist = () => {
  const userID = "9080875956"; 
  const [liked, setLiked] = useState(false);

  const handleWishToggle = async () => {
    const wishRef = doc(db, "wishlist", userID);
      if (!liked) {
     
        await setDoc(wishRef, { wish: "Wish" });
       console.log(true)
      }
    //   } else {
       
    //     await deleteDoc(wishRef);
        
    //   }
      setLiked(!liked);
    
  };

  return (
    <div>
      <button onClick={handleWishToggle}>
        <Checkbox checked={liked} />
      </button>
    </div>
  );
};

export default Wishlist;
