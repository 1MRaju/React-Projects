// import React, { useEffect, useState } from 'react'
// import './ProjectItems.css'

// import { NavLink } from 'react-router-dom'
// import ItemDataStore from './ItemDataStore'
// import AddItem from './AddItem'



// const ItemData = () => {
//  const [update, setUpdate] = useState(ItemDataStore);
// //  const [imageFileName, setImageFileName] = useState('');
// const [selectedImage, setSelectedImage] = useState(null);

// console.log(selectedImage.data.name);


//  useEffect(()=>{
//    // fetch items from localStorage on component mount
//    const storedItems = localStorage.getItem('items');
//    if (storedItems) {
//      setUpdate(JSON.parse(storedItems));
//    }
//  },[])

//   const removeUser = (id) => {
//     const updatedUsers = update.filter((project) => project.id !== id);
//     setUpdate(updatedUsers);
//     localStorage.setItem('items', JSON.stringify(updatedUsers)); 
//   };

//   const addNewItem = (newItem) => {
//     newItem.image = selectedImage.data; // Set the image data
//     const updatedItems = [...update, newItem]
//     setUpdate(updatedItems);
//     console.log(updatedItems);
//     // store updated items in localStorage
//   localStorage.setItem('items', JSON.stringify(updatedItems));
//   };

 
//   const onImageChange = (imageData, imageName) => {
//     setSelectedImage({ data: imageData, name: imageName });
//   };


//   const [form, setForm] = useState(false)
//   const setItem = () =>{
//       setSelectedImage(null);
//       setForm(true)
//   }

//   return (
//     <>
//     <div className="addButton">
//      <button className="btn addProject" onClick={setItem}>Add New Project</button>
//     </div>
     
   
//     {/* {form ? (
//         <div className='addForm'>
//           <AddItem addNewItem={addNewItem} setImageFileName={setImageFileName} />
//         </div>
//       ) : null} */}

//      {form && (
//         <div className='addForm'>
//           {/* Pass the onImageChange function */}
//           <AddItem addNewItem={addNewItem} onImageChange={onImageChange} />
//         </div>
//       )}

// {selectedImage?.data && (
//   <img src={selectedImage.data} alt='Selected Project' />
// )}
   
//     {
//       update.map((item)=>{
//         const { id, image, title, text, view} = item
//         console.log(image);
//         return(
//         <div className="item-card" key={id}>
//             <img src={`../${image}`} alt="Project"/>
//             {/* <img src={`${process.env.PUBLIC_URL}/${selectedImage.imagePath}`} alt="Project" /> */}
//             {/* <img src={`${process.env.PUBLIC_URL}../assets/${image}`} alt="Project" /> */}
//             {/* <img src={`${process.env.PUBLIC_URL}/assets/${image}`} alt="Project" /> */}
//             {/* <img src={image} alt="Project" /> */}
//             <h2 className="item-title">{title}</h2>
//             <div className="item-details">
//                 <p>{text}</p>
//             </div>
//             <div className="item-buttons">
//                 <NavLink to={view} className='btn'>View</NavLink>
//                 <NavLink to="url.com" className='btn'>Source</NavLink>
//             </div>
//                  <div>
//                     <button onClick={() => removeUser(id)} className='btn'>
//                       remove
//                     </button>
//                 </div>
//             </div>
//         )
//       })
//     }
//     </>
//   )
// }

// export default ItemData

// import React, { useEffect, useState } from 'react';
// import './ProjectItems.css';
// import { NavLink } from 'react-router-dom';
// import ItemDataStore from './ItemDataStore';
// import AddItem from './AddItem';

// const ItemData = () => {
//   const [update, setUpdate] = useState(ItemDataStore);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     const storedItems = localStorage.getItem('items');
//     if (storedItems) {
//       setUpdate(JSON.parse(storedItems));
//     }
//   }, []);

//   const removeUser = (id) => {
//     const updatedUsers = update.filter((project) => project.id !== id);
//     setUpdate(updatedUsers);
//     localStorage.setItem('items', JSON.stringify(updatedUsers));
//   };

//   const addNewItem = (newItem) => {
//     newItem.image = require(`../assets/${newItem.image}`).default;
//     const updatedItems = [...update, newItem];
//     setUpdate(updatedItems);
//     localStorage.setItem('items', JSON.stringify(updatedItems));
//   };

//   const onImageChange = (imageFileName) => {
//     setSelectedImage(imageFileName);
//   };

//   const [form, setForm] = useState(false);

//   const setItem = () => {
//     // setSelectedImage(null);
//     setForm(true);
//   };

//   return (
//     <>
//       <div className="addButton">
//         <button className="btn addProject" onClick={setItem}>
//           Add New Project
//         </button>
//       </div>

//       {form && (
//         <div className="addForm">
//           <AddItem addNewItem={addNewItem} onImageChange={onImageChange} />
//         </div>
//       )}

//       {selectedImage && (
//         // <img src={selectedImage} alt="Selected Project" />
//         <img src={require(`../assets/${selectedImage}`).default} alt='Selected Project' />
//       )}

//       {update.map((item) => {
//         const { id, image, title, text, view } = item;
//         console.log(image);
//         return (
//           <div className="item-card" key={id}>
//             {/* <img src={image} alt="Project" /> */}
//             <img src={require(`../assets/${image}`).default} alt="Project" />
//             <h2 className="item-title">{title}</h2>
//             <div className="item-details">
//               <p>{text}</p>
//             </div>
//             <div className="item-buttons">
//               <NavLink to={view} className="btn">
//                 View
//               </NavLink>
//               <NavLink to="url.com" className="btn">
//                 Source
//               </NavLink>
//             </div>
//             <div>
//               <button onClick={() => removeUser(id)} className="btn">
//                 Remove
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default ItemData;



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

