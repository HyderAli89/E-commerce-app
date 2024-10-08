// import React, { useContext } from "react";
// import "./Productdisplay.css";
// import star_icon from "../Assets/Frontend_Assets/star_icon.png";
// import star_dull_icon from "../Assets/Frontend_Assets/star_dull_icon.png";
// import { ShopContext } from "../../Context/ShopContext";
// export const Productdisplay = (props) => {
//   const { product } = props;
//   const {addToCart}=useContext(ShopContext)
//   return (
//     <div className="productdisplay">
//       <div className="productdisplay-left">
//         <div className="prooductdisplay-img-list">
//           <img src={product.image} alt="" />
//           <img src={product.image} alt="" />
//           <img src={product.image} alt="" />
//           <img src={product.image} alt="" />
//         </div>
//         <div className="productdisplay-img">
//           <img src={product.image} alt="" className="productdisplay-main-img" />
//         </div>
//       </div>
//       <div className="productdisplay-right">
//         <h1>{product.name}</h1>
//         <div className="productdisplay-right-star">
//           <img src={star_icon} alt="" />
//           <img src={star_icon} alt="" />
//           <img src={star_icon} alt="" />
//           <img src={star_icon} alt="" />
//           <img src={star_dull_icon} alt="" />
//           <p>(79)</p>
//         </div>
//         <div className="productdisplay-right-prices">
//           <div className="productdisplay-right-price-old">
//             ${product.old_price}
//           </div>
//           <div className="productdisplay-right-price-new">
//             ${product.new_price}
//           </div>
//         </div>
//         <div className="productdisplay-right-description">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quam,
//           odio vero officia obcaecati quas culpa aperiam odit officiis ducimus
//           neque aliquid. Explicabo minus quae quod dolores praesentium molestiae
//           perferendis!
//         </div>
//         <div className="productdisplay-right-size">
//           <h1>Select Size</h1>
//           <div className="productdisplay-right-sizes">
//             <div>S</div>
//             <div>M</div>
//             <div>L</div>
//             <div>XL</div>
//             <div>XXL</div>
//           </div>
//         </div>
//         <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
//         <p className="productdisplay-right-category">
//           <span>Category :</span> {product.category} , {product.name}
//         </p>
//         <p className="productdisplay-right-category">
//           <span>Tags :</span> Modern, Latest
//         </p>
//       </div>
//     </div>
//   );
// };
// export default Productdisplay;



import React, { useContext } from "react";
import "./Productdisplay.css";
import star_icon from "../Assets/Frontend_Assets/star_icon.png";
import star_dull_icon from "../Assets/Frontend_Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import Swal from 'sweetalert2';

export const Productdisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = () => {
    addToCart(product.id);
    
    // SweetAlert notification
    Swal.fire({
      title: 'Added to Cart!',
      text: `${product.name} has been added to your cart.`,
      icon: 'success',
      confirmButtonText: 'Awesome'
    });
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="prooductdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} alt="" className="productdisplay-main-img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(79)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quam,
          odio vero officia obcaecati quas culpa aperiam odit officiis ducimus
          neque aliquid. Explicabo minus quae quod dolores praesentium molestiae
          perferendis!
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={handleAddToCart}>Add to cart</button>
        <p className="productdisplay-right-category">
          <span>Category :</span> {product.category} , {product.name}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default Productdisplay;
