import React from 'react';
import './styles.css'
import { CartState } from "../Context/Context";
import Filters from "./Filter";
import SingleProduct from "./Singleproduct";

const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.rating >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;









// import { CartState } from '../Context/Context.js';
// import Singleproduct from './Singleproduct.js';
// import './style.css';
// import Filter from './Filter';


// function Home(props) {
//     const {state:{products}, 
//     productState:{byStock, byFastDelivery, sort, byRating, searchQuery}}=CartState()

//     const transformProducts=()=>{
//         let sortedProducts=products;

//         if(sort){
//             sortedProducts=sortedProducts.sort((a,b)=>
//                 sort==='lowToHigh'?a.price-b.price : b.price-a.price
//             )
//         }
//         if(!byStock){
//             sortedProducts=sortedProducts.filter((prod)=>prod.inStock)
//         }

//         if(byFastDelivery){
//             sortedProducts=sortedProducts.filter((prod)=>prod.fastDelivery)
//         }

//         if(byRating){
//             sortedProducts=sortedProducts.filter((prod)=>prod.ratings >= byRating)
//         }

//         if(searchQuery){
//             sortedProducts=sortedProducts.filter((prod)=>prod.name.toLowerCase().includes(searchQuery))
//         }

//         return sortedProducts
//     }
   
//     return (
//         <div className="home">
//             <Filter/>
//             <div className="productContainer">
//                 {transformProducts().map((prod)=>{
//                     return <Singleproduct prod={prod} key={prod.id}/>     
//                 })}
//             </div>
//         </div>
//     );
// }

// export default Home;