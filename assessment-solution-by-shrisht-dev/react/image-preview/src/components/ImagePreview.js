import React from "react";
import HiddenImageDiv from "./HiddenImageDiv";
const ImagePreview = ({images,setImage}) => {


    const handleHidAll=()=>{
         
      
        const filterdata=images.map((item)=>{
            
             item.visible=false;

             return item;
        })


        setImage([...filterdata]);
          
    }

   const  handleShowAll=()=>{

         const filterdata=images.map((item)=>{
            
             item.visible=true;

             return item;
        })

        setImage([...filterdata]);
   }


   const handleIamge=(id)=>{
      
     console.log(id);
     
       const filterData=images.map((item)=>{

            if(item.id===id){
                item.visible=false;
            }

            return item;
       })

       setImage(filterData);
   }


   const handleHide=(id)=>{
     
       const filterData=images.map((item)=>{
            if(item.id===id){
                item.visible=true;
            }

            return item;
       })

       setImage(filterData);
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
             images.map((item)=>{

                 return <div key={item.id}>
                      {
                          item.visible && <img
                          onClick={()=>handleIamge(item.id)}
                          key={item.id} src={item.src} height={200} width={300} alt={item.alt} />
                      }

                      {
                         !item.visible &&<HiddenImageDiv
                            onClick={()=>handleHide(item.id)}
                          key={item.id} />
                      }
                  </div>
             })
           }
          </div>
        </section>
        <section className="card-actions justify-content-center">
          <button 
            onClick={handleShowAll}
          data-testid="show-all-btn">Show all</button>
          <button 
           onClick={handleHidAll}
          className="danger" data-testid="hide-all-btn">
            Hide all
          </button>
        </section>
      </div>
    </div>
  );
};

export default ImagePreview;
