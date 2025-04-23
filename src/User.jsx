import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { Button, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';


const UsernameEditor = () => {
  const [username, setUsername] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const userId="aMEw5RrAFlaAm6r7j72N";
  useEffect(() => {
    const fetchUsername = async () => {
      if (!userId) return;
      const userRef = doc(db, "Users", userId);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        setUsername(userSnap.data().username);
      }
    };
    fetchUsername();
  }, [userId]);

  const handleSave = async () => {
    if (!userId || !username.trim()) return;
    const userRef = doc(db, "Users", userId);
    await updateDoc(userRef, { username });
    setIsEditing(false);
  };

  return (
    <div className="flex items-center gap-2">
      {isEditing ? (
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          size="small"
        />
      ) : (
        <span>{username ? username:"Enter Name"}</span>
      )}

      {isEditing ? (
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      ) : (
        <Button variant="outlined" color="secondary" onClick={() => setIsEditing(true)}>
          <EditIcon/>
        </Button>
      )}
    </div>
  );
};

export default UsernameEditor;