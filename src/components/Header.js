import React from 'react';

const Header =(props)=>{
    return(
       
                <div className='flex shopping-card'>
    <div onClick={()=> props.handleShow(false)}>E-commerce</div>
    <div onClick={()=> props.handleShow(true)}>Cart 
        <sup>{props.count}</sup></div>

</div>
     
    )
}
export default Header;
