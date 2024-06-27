import React from 'react';
import './actor.css';
const Actor = React.memo(({ data }) => {
  // This will help you see when the component re-renders
   console.log(data);
  
  return (
    <>
  <div className="card-container" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
    {data?.map((item, index) => (
      <div key={index} className="card-item">
        <div>
          <img className="card-img-top" src={item.image} alt="Card image cap" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    ))}
  </div>
</>

  );
}, (prevProps, nextProps) => {
  // Custom comparison function
  return prevProps.data === nextProps.data;
});

export default Actor;
