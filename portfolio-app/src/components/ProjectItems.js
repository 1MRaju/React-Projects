import React from 'react'
import './ProjectItems.css'

import ItemData from './ItemData'

const ProjectItems = () => {
  return (
    <>
      <div className="items-container">
        <div className="item-heading">
          <h1>Projects</h1>
         </div>
        <div className="item-container">
            <ItemData/>
        </div>
      </div>
    </>
  )
}

export default ProjectItems
