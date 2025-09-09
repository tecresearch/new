import React, { useState } from "react";
import HiddenImageDiv from "./HiddenImageDiv";
const ImagePreview = ({ images }) => {
  const [image, setImage]=useState(images);

  const handleHide = () => {
       
      const updatedImage= image.map( (i)=>({
         ...i,
         visible:false

      }))

      setImage(updatedImage);
  }

  const showAllHandler =()=>{
        
       const updatedImage=image.map ( (i)=>({
            ...i,
            visible:true
       }))

       setImage(updatedImage);
  }

  const imageView =(imageId)=>{
        
       const updatedImage =image.map ((i) =>i.id===imageId ? {...i ,visible:!i.visible} :i);
       setImage(updatedImage);
       
  }
  return (
    <div className="layout align-items-center mt-100">
      <div className="card ma-20 pa-50">
        <section>
          <div
            className="layout-row justify-content-around"
            data-testid="images-div"
          >


            {
              image.map(({ src, id, alt, visible }) => {

                 return visible ? <img key={id} src={src} height={200} width={300} alt={alt}  onClick={()=>imageView(id)} /> 
                 :<HiddenImageDiv key={id} onClick={()=>imageView(id)}/>
               
              })
            }



          </div>
        </section>
        <section className="card-actions justify-content-center">
          <button data-testid="show-all-btn"  onClick={showAllHandler} >Show all</button>
          <button className="danger" data-testid="hide-all-btn" onClick={handleHide}>
            Hide all
          </button>
        </section>
      </div>
    </div>
  );
};

export default ImagePreview;
