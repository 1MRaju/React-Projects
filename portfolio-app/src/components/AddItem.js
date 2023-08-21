
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



