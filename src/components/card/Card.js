import React from 'react'
import "/../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Card = ({Menu}) => {
 
    
    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    
 
  {Menu.map((item)=>{
  

  return(
    <div className="col-4 mb-4">
      <div className="card" style={{width: "18rem"}}>
  <img src={item.Image} className="card-img-top" alt="..."height={"200px"} />
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">{item. description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  ) 
})}
</div>
</div>
    </div>
   
  )
}

export default Card