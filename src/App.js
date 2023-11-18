import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/Product';
import { useState } from 'react';
import Search from './components/Search';

function App() {

  const[product,setProduct]=useState([
    {
      url:'C:\Users\Sohail\Desktop\Ecommerce\ecommerce\src\images',
      name:'T-shirt',
      category:'T-shirts',
      seller:'Amazon seller',
      price:1999

    },
    {
      url:'file:///C:/Users/Sohail/Downloads/Best-gold-watches-HP.webp',
      name:'Watches',
      category:'Watches',
      seller:'Amazon seller',
      price:4999

    },
    {
      url:'C:/Users/Sohail/Downloads/47d4710b-2a79-408a-bfe6-3d4ac8beae501574504357602-Roadster-Men-Pack-of-6-T-shirts-6711574504350623-1.webp',
      name:'T-shirt',
      category:'T-shirts',
      seller:'Amazon seller',
      price:1999

    },
    {
      url:'C:/Users/Sohail/Downloads/47d4710b-2a79-408a-bfe6-3d4ac8beae501574504357602-Roadster-Men-Pack-of-6-T-shirts-6711574504350623-1.webp',
      name:'T-shirt',
      category:'T-shirts',
      seller:'Amazon seller',
      price:1999

    },
    {
      url:'file:///C:/Users/Sohail/Downloads/Best-gold-watches-HP.webp',
      name:'Watches',
      category:'Watches',
      seller:'Amazon seller',
      price:4999

    },
    {
      url:'file:///C:/Users/Sohail/Downloads/Best-gold-watches-HP.webp',
      name:'Watches',
      category:'Watches',
      seller:'Amazon seller',
      price:4999

    },
    {
      url:'file:///C:/Users/Sohail/Downloads/Best-gold-watches-HP.webp',
      name:'Watches',
      category:'Watches',
      seller:'Amazon seller',
      price:4999

    },
    {
      url:'C:\Users\Sohail\Desktop\Ecommerce\ecommerce\src\images',
      name:'T-shirt',
      category:'T-shirts',
      seller:'Amazon seller',
      price:1999

    },
    {
      url:'C:\Users\Sohail\Desktop\Ecommerce\ecommerce\src\images',
      name:'T-shirt',
      category:'T-shirts',
      seller:'Amazon seller',
      price:1999

    },
    {
      url:'C:\Users\Sohail\Desktop\Ecommerce\ecommerce\src\images',
      name:'T-shirt',
      category:'T-shirts',
      seller:'Amazon seller',
      price:1999

    },
    {
      url:'C:\Users\Sohail\Desktop\Ecommerce\ecommerce\src\images',
      name:'T-shirt',
      category:'T-shirts',
      seller:'Amazon seller',
      price:1999

    },
    {
      url:'C:\Users\Sohail\Desktop\Ecommerce\ecommerce\src\images',
      name:'T-shirt',
      category:'T-shirts',
      seller:'Amazon seller',
      price:1999

    },
    {
      url:'C:\Users\Sohail\Desktop\Ecommerce\ecommerce\src\images',
      name:'T-shirt',
      category:'T-shirts',
      seller:'Amazon seller',
      price:1999

    },
    {
      url:'C:\Users\Sohail\Desktop\Ecommerce\ecommerce\src\images',
      name:'T-shirt',
      category:'T-shirts',
      seller:'Amazon seller',
      price:1999

    },
    {
      url:'C:\Users\Sohail\Desktop\Ecommerce\ecommerce\src\images',
      name:'T-shirt',
      category:'T-shirts',
      seller:'Amazon seller',
      price:1999

    },
    

  
  ])
  const[cart,setCart]=useState([])
  const[showCart,setShowCart]=useState(false)

const addToCart=(data)=>{
  setCart([...cart,{...data,quantity:1}])

}
const handleShow=(value)=>{
  setShowCart(value)

}


  return (
   <div>

    <Header count={cart.length} 
    handleShow={handleShow}></Header>
<Search placeholder='Enter a name' data={product}></Search>
    {
      showCart?
         <Cart cart={cart}></Cart> :
         <Product product={product} addToCart={addToCart}></Product>
    }

    <Footer></Footer>
  
   </div>
  );
}

export default App;
