import React, { Component } from 'react';
import UserComponent from '../../EditorComponents/UserComponent';
import { storage } from '../../../../cache/ComponentCache'

const GalleryPost = ({name, style, children, onEditorClick, onEditorChildClick = undefined}) => {
  return (
    <div className='GalleryPost-flexcontainer' style={style} onClick={onEditorClick}>
      {
        children.map((referenceObject) => {
          console.log("THIS IS AN IMAGE/TEXTBOX IN GALLERYPOST", referenceObject);
          return (
            <UserComponent key={referenceObject.componentId} type={referenceObject.type} componentId={referenceObject.componentId} child={true}/>
          )
        }
      )}
    </div>
  )
}

export default GalleryPost;