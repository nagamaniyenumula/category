import React from 'react';
import { NavLink, Link } from 'react-router-dom';
export default function Laptops(props) {
    if(props.Lap){
    return (
    <div>
        <div className='container-fluid mx-2'>
        <div className='row mt-5 mx-2'>
            <div className='col-md-3'>
                <Link to='/Mobiles'>
                <button className="btn btn-warning w-100 mb-4" >Mobiles</button>
                </Link>
            
            <Link to='/Laptops'>
                <button className="btn btn-warning w-100 mb-4" >Laptops</button>
                </Link>
            
           <Link to='/'>
                <button className="btn btn-warning w-100 mb-4" >All</button>
                </Link>
            
          </div>     
           <div className='col-md-9'>
            <div className='row'>
            {props.Lap.map((values)=>{
                const{id,title,price,image}=values;
                return(
                    <>
                    
                    <div className='col-md-4' key={id}>
                    <div className="card" >
         <img className="card-img-top" src={image}/>
         <div className="card-body">
           <h5 className="card-title">{ title}</h5>
           <p>Price:{price}/-</p>
           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <button href="#" class="btn btn-primary">Bye now</button>
         </div>
       </div>
                    </div>
                    
                    </>
                )
            })} 
            </div>
         
           
          
             
            
           
            </div> 
        </div>
      </div>
    </div>
  )}
}
