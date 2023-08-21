import React, { useEffect, useState } from 'react';
import './ProjectItems.css';
import { NavLink } from 'react-router-dom';
import AddItem from './AddItem';

const ItemData = () => {
  const [update, setUpdate] = useState([]);
  
  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setUpdate(JSON.parse(storedItems));
    }
  }, []);

  const removeItem = (id) => {
    const updatedItems = update.filter((item) => item.id !== id);
    setUpdate(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const addNewItem = (newItem) => {
    const updatedItems = [...update, newItem];
    setUpdate(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };
  
  const [form, setForm] = useState(false)
  const [closeForm, setCloseForm] = useState(true)

  return (
    <>
      <div className="addButton">
        <button className='btn' onClick={()=>{setForm(true); setCloseForm(true)}}>Add Project</button>
        {form && closeForm ? (<AddItem addNewItem={addNewItem} handleCloseForm={()=>setCloseForm(false)} />) : ''}
      </div>
     
    <div className="projects-container">
      {update.map((item) => {
        const { id, image, name, description, githublink } = item;
        return (
          <div className="item-card" key={id}>
            <img src={image} alt="Project" />
            <h2 className="item-title">{name}</h2>
            <div className="item-details">
              <p>{description}</p>
            </div>
            <div className="item-buttons">
              <NavLink to={githublink} className="btn">
                Github
              </NavLink>
              <button onClick={() => removeItem(id)} className="btn">
                Remove
              </button>
            </div>
          </div>
        );
      })}
   </div>
    </>
  );
};

export default ItemData;

