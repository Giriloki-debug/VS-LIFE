import {
    addDoc,
    collection,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,
  } from 'firebase/firestore';
  import { useEffect, useState } from 'react';
  import { db } from './firebase-config';
  import { data } from './Firebase';
  import TextField from '@mui/material/TextField';
  import Button from '@mui/material/Button';
  import Card from '@mui/material/Card';
  import CardContent from '@mui/material/CardContent';
  
  function TwoDb() {
    const [itemInput, setItemInput] = useState({ name: '' });
    const [itemsDb1, setItemsDb1] = useState([]);
    const [itemsDb2, setItemsDb2] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState('');
  
    const addItem = async () => {
      if (itemInput.name.trim() === '') return;
      await addDoc(collection(db, 'items'), { name: itemInput.name });
    };
  
    const addItem1 = async () => {
      if (itemInput.name.trim() === '') return;
      await addDoc(collection(data, 'items'), { name: itemInput.name });
    };
  
    const fetchItems = async () => {
      const snapshot = await getDocs(collection(db, 'items'));
      setItemsDb1(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
  
    const fetchItems1 = async () => {
      const snapshot = await getDocs(collection(data, 'items'));
      setItemsDb2(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
  
    const deleteItem = async (id, source = 'db1') => {
      const ref = source === 'db1' ? doc(db, 'items', id) : doc(data, 'items', id);
      await deleteDoc(ref);
      source === 'db1' ? fetchItems() : fetchItems1();
    };
  
    const startEdit = (id, currentName) => {
      setEditingId(id);
      setEditingText(currentName);
    };
  
    const confirmUpdate = async (id, source = 'db1') => {
      const ref = source === 'db1' ? doc(db, 'items', id) : doc(data, 'items', id);
      await updateDoc(ref, { name: editingText });
      setEditingId(null);
      source === 'db1' ? fetchItems() : fetchItems1();
    };
  
    useEffect(() => {
      fetchItems();
      fetchItems1();
    }, []);
  
    const handleSave = (e) => {
      setItemInput((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
  
    const handleAddBoth = async () => {
      await addItem();
      await addItem1();
      setItemInput({ name: '' });
      fetchItems();
      fetchItems1();
    };
  
    return (
      <div className="p-6 space-y-6 max-w-4xl mx-auto ">
        <Card className="bg-white">
          <CardContent className="flex flex-col md:flex-row items-center gap-4">
            <TextField
              label="Enter name"
              name="name"
              value={itemInput.name}
              onChange={handleSave}
              className="w-full md:w-1/2"
            />
            <Button variant="contained" onClick={handleAddBoth}>ADD</Button>
          </CardContent>
        </Card>
          
        <Card className="bg-white">
          <CardContent>
            <h3 className="text-lg font-semibold mb-4">Items from Payroll DB</h3>
            <ul className="space-y-2">
              {itemsDb1.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  {editingId === item.id ? (
                    <>
                      <TextField
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        size="small"
                      />
                      <Button size="small" variant="contained" onClick={() => confirmUpdate(item.id, 'db1')}>Save</Button>
                      <Button size="small" variant="outlined" onClick={() => setEditingId(null)}>Cancel</Button>
                    </>
                  ) : (
                    <>
                      <span className="flex-1">{item.name}</span>
                      <Button size="small" variant="outlined" onClick={() => startEdit(item.id, item.name)}>Edit</Button>
                      <Button size="small" color="error" onClick={() => deleteItem(item.id, 'db1')}>Delete</Button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
  
        <Card className="bg-white">
          <CardContent>
            <h3 className="text-lg font-semibold mb-4">Items from fir-29d87 DB</h3>
            <ul className="space-y-2">
              {itemsDb2.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  {editingId === item.id ? (
                    <>
                      <TextField
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        size="small"
                      />
                      <Button size="small" variant="contained" onClick={() => confirmUpdate(item.id, 'db2')}>Save</Button>
                      <Button size="small" variant="outlined" onClick={() => setEditingId(null)}>Cancel</Button>
                    </>
                  ) : (
                    <>
                      <span className="flex-1">{item.name}</span>
                      <Button size="small" variant="outlined" onClick={() => startEdit(item.id, item.name)}>Edit</Button>
                      <Button size="small" color="error" onClick={() => deleteItem(item.id, 'db2')}>Delete</Button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  export default TwoDb;