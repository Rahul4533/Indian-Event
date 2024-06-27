import React from 'react';
import './actor.css';
const Actor = React.memo(({ data ,video}) => {
  // This will help you see when the component re-renders
  
  
  return (
  <>
   <div className='actor d-flex'>
  {
    data?.map((item,index)=>{
      return(
        <div className='actor__item' >
          <div className='image-container' key={index}>
            <img  src={item.image} alt={item.name} className='actor-image' />
            <div className='hover-effect'></div>
            <button>Submit</button>
          </div>
          <h3 className='actor-name'>{item.name}</h3>
          
        </div>
      )
    })
  }
</div>
    </>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function
  return prevProps.data === nextProps.data;
});

export default Actor;
