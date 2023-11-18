import React from 'react';
import {useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';


const Product =({product,addToCart})=>{
    const[CART,setProduct]=useState(Array.from({length:20}))
    const[hasMore, setHasMore]=useState(true)
    const fetchMoreData=()=>{
        setTimeout(()=>{
            setProduct(CART.concat(Array.from({length:20})))
        },500)
    }
    return(
        
    <div className=''>

<InfiniteScroll
    dataLength={product.length}
    next={fetchMoreData}
    hasMore={hasMore}
    loader={<h4>Loading...</h4>}
  >
     {
            product.map((productItem,productIndex)=>{
                return(
                    <div style={{width:'50%'}}>
                        <div className='product-item'>
                            
                            <img src={productItem.url}/>
                            <p>{productItem.name} | {productItem.category}</p>
                            <p>{productItem.seller}</p>
                            <p>Rs.{productItem.price}/-</p>
                            <button
                            onClick={()=>addToCart(productItem)}
                            >Add to card</button>
                        </div>
                    </div>
                )

            })
        }
  </InfiniteScroll>

    </div>

     
    )
}
export default Product;