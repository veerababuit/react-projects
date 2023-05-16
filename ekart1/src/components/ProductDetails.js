import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../components/productDetails.css';

const ProductDetails = () => {

  const navigate = useNavigate();
  const location = useLocation();
  console.log("Location : ", location)
  var product = location.state;

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1"><img style={{ height: "450px", width: "280px" }} src={product.image} /></div>
                </div>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title text-start">{product.name}</h3>
                <div className="rating">
                  {/* <div className="stars text-start">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div> */}
                  <h5 className="review-no text-start">Rating : {product.rating}</h5>
                </div>
                <p className="product-description text-start">{product.description}</p>
                <h4 className="text-start">current price: <span>₹ {product.price}</span></h4>
                {/* <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p> */}

                {/* <h5 className="colors">colors:
                  <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                  <span className="color green"></span>
                  <span className="color blue"></span>
                </h5> */}
                <div className="text-start">
                  <button onClick={()=>navigate("/login", {state:{message: "Please Login to Continue.."}})} className="add-to-cart btn btn-primary mt-5" type="button">add to cart</button> &nbsp; &nbsp;
                  <button onClick={() => navigate("/")} className="add-to-cart btn btn-info mt-5" type="button">Back</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
