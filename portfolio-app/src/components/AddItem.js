// import React, { useState } from 'react'
// import './AddItem.css'

// const AddItem = ({ addNewItem, onImageChange }) => {
//     // const [name, setName] = useState(0);
//     // const [update, setUpdate] = useState(ItemDataStore);

//     const [image, setImage] = useState(null);
//     const [imageFileName, setImageFileName] = useState('')

//   const handleImageChange = (e) => {
//     const selectedImage = e.target.files[0];
//     console.log(selectedImage)
//     // setImage(selectedImage);
//     setImage(selectedImage);
//     setImageFileName(selectedImage.name);
//     onImageChange(selectedImage, selectedImage.name); 
//   };

//     const handleUpdate =(e)=>{
//         e.preventDefault();
//         // if (!name) return;
//         // const fakeId = Date.now();
//         // // const newUser = { id: fakeId, name , img };
//         // const newUser = setName({ ...name, id:fakeId, img, [e.target.name]: e.target.value });
//         // const updatedUsers = [...update, newUser];
//         // setUpdate(updatedUsers);
//         // // set back to empty
//         // setName('');

//         const formData = new FormData(e.currentTarget);

//         // get values one by one
//         const name = formData.get('itemname');
//         const description = formData.get('itemdesc');
//         const githublink = formData.get('itemgit');
        
//         //create object
//         const newItem = {
//           id:Date.now(),
//           name,
//           description,
//           githublink,
//           image: `${process.env.PUBLIC_URL}/assets/${imageFileName}`, // dynamically generate image path
//         };
    
//         addNewItem(newItem)
//         // get all of them
//         // const newUser = Object.fromEntries(formData);
//         // do something (post request, add to list, etc)
//         console.log(newItem);
//         // Gotcha - re-render won't clear out the values
//         // setUpdate([...update, newItem]);

//         // reset values
//         e.currentTarget.reset();
//         setImage(null)

//         setImageFileName(''); // clears the image file name
//     }

   

//   return (
//     <>
//       <form className='form' onSubmit={handleUpdate} >
//       <div className="form-row">
//         <label htmlFor="itemimage" className='form-label'>Upload Project Image</label>
//         <input
//           type="file"
//           accept="image/*"
//           id='itemimage'
//           name='itemimage'
//           onChange={(e) => handleImageChange(e)}
//         />
//       </div>

//         <div className="form-row">
//             <label htmlFor="itemname" className='form-label'>Enter Project Name</label>
//             <input 
//             type="text" 
//             className='form-input'
//             id='itemname'
//             name='itemname'
//             // value={name.itemname}
//             // onChange={(e) => setName(e.target.value)}
//             />
//         </div>
         
//          <div className="form-row">
//             <label htmlFor="itemdesc" className='form-label'>Enter Project Description</label>
//             <textarea 
//             className='form-textarea' 
//             id='itemdesc'
//             name='itemdesc'
//             // value={name.itemdesc}
//             // onChange={(e) => setName(e.target.value)}
//             />
//          </div>

//         <div className="form-row">
//             <label htmlFor="itemgit" className='form-label'>Enter Github Link</label>
//             <input 
//             type="text" 
//             id='itemgit'
//             name='itemgit'
//             // value={name.itemgit}
//             // onChange={(e) => setName(e.target.value)}
//             />
//         </div>

//         <button type='submit'>Submit</button>
//       </form>
   
//       {imageFileName && (
//         <img src={`${process.env.PUBLIC_URL}/assets/${imageFileName}`} alt='Project' />
//       )}
//     </>
//   )
// }

// export default AddItem



// import React, { useState } from 'react';
// import './AddItem.css';

// const AddItem = ({ addNewItem, onImageChange }) => {
//   const [imageFileName, setImageFileName] = useState('');

//   const handleImageChange = (e) => {
//     const selectedImage = e.target.files[0];
//     setImageFileName(selectedImage.name);
//     onImageChange(selectedImage.name);
//   };

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const name = formData.get('itemname');
//     const description = formData.get('itemdesc');
//     const githublink = formData.get('itemgit');

//     const newItem = {
//       id: Date.now(),
//       name,
//       description,
//       githublink,
//       // image: `../assets/${imageFileName}`, // Dynamically generate image path
//       // image: `/static/media/${imageFileName}`,
//       image: imageFileName,
//     };

//     addNewItem(newItem);
//     e.currentTarget.reset();
//     setImageFileName(''); // Clears the image file name
//   };

//   return (
//     <>
//       <form className="form" onSubmit={handleUpdate}>
//         <div className="form-row">
//           <label htmlFor="itemimage" className="form-label">
//             Upload Project Image
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             id="itemimage"
//             name="itemimage"
//             onChange={(e) => handleImageChange(e)}
//           />
//         </div>
        
//         <div className="form-row">
//             <label htmlFor="itemname" className='form-label'>Enter Project Name</label>
//             <input 
//             type="text" 
//             className='form-input'
//             id='itemname'
//             name='itemname'
//             // value={name.itemname}
//             // onChange={(e) => setName(e.target.value)}
//             />
//         </div>
         
//          <div className="form-row">
//             <label htmlFor="itemdesc" className='form-label'>Enter Project Description</label>
//             <textarea 
//             className='form-textarea' 
//             id='itemdesc'
//             name='itemdesc'
//             // value={name.itemdesc}
//             // onChange={(e) => setName(e.target.value)}
//             />
//          </div>

//         <div className="form-row">
//             <label htmlFor="itemgit" className='form-label'>Enter Github Link</label>
//             <input 
//             type="text" 
//             id='itemgit'
//             name='itemgit'
//             // value={name.itemgit}
//             // onChange={(e) => setName(e.target.value)}
//             />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//       {imageFileName && (
//         //  <img src={`${process.env.PUBLIC_URL}${imageFileName}`} alt='Project' />
//         <img
//           src={`../assets/${imageFileName}`}
//           alt="Project"
//         />
//       )}
//     </>
//   );
// };

// export default AddItem;



import React, { useState } from 'react';
import './AddItem.css';

const AddItem = ({ addNewItem, handleCloseForm}) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    githublink: '',
    image:null, 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  // const handleImageChange = (e) => {
  //   const selectedImage = e.target.files[0];
  //   console.log(selectedImage);
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     image: selectedImage.name,
  //   }));
  // };


  const handleImageChange = (e) => {
    let selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: reader.result, // Save the image data URL
        }));
      };
      reader.readAsDataURL(selectedImage);
    }
  };
  

  const handleUpdate = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      ...formData,
    };

    addNewItem(newItem);

    setFormData((prevData)=>({
      ...prevData,
      name: '',
      description: '',
      githublink: '',
      image: '',
    }));
  };

  return (
    <>
      <form className="form form-input" onSubmit={handleUpdate}>
        {/* Other form inputs */}
        {/* <input
          type="file"
          accept="image/*"
          id="itemimage"
          name="itemimage"
          onChange={(e) => handleImageChange(e)}
        /> */}
        {/* Other form inputs */}

        <div className="form-row">
           <label htmlFor="itemimage" className="form-label">
             Upload Project Image
           </label>
           <input
            type="file"
            className='form-input'
            accept="image/*"
            id="itemimage"
            name='itemimage'
            onChange={(e) => handleImageChange(e)}
          />
        </div>
        
        <div className="form-row">
          <label htmlFor="itemname" className='form-label'>Enter Project Name</label>
          <input 
            type="text" 
            className='form-input'
            id='itemname'
            name='name' 
            value={formData.name} 
            onChange={handleInputChange} 
          />
         </div>

         <div className="form-row">
            <label htmlFor="itemdesc" className='form-label'>Enter Project Description</label>
            <textarea 
            className='form-textarea' 
            id='itemdesc'
            name='description'
            value={formData.description}
            onChange={handleInputChange} 
            />
         </div>

        <div className="form-row">
            <label htmlFor="itemgit" className='form-label'>Enter Github Link</label>
            <input 
            type="text" 
            className='form-input'
            id='itemgit'
            name='githublink'
            value={formData.githublink}
            onChange={handleInputChange} 
            />
        </div>
        <div className="form-button" >
          <button className='btn' type="submit">Submit</button>
          <button className='btn' type="close" onClick={()=>handleCloseForm()}>Close</button>
        </div>
      </form>
    </>
  );
};

export default AddItem;



