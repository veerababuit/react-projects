import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../components/Home.css';


function Home() {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts()
  }, [])


  const showProductDetails = (product) => {
    console.log("show Product Details ", product)
    navigate("/productdetails", { state: product })
  }

  const getProducts = () => {
    axios.get("http://localhost:8089/api/v1.0.0/product/list").then(
      response => {
        if (response.status) {
          console.log("show products ", response);
          setProducts(response.data.products)
        }
      }
    )
  }

  const generateProductCard = () => {
    console.log("Product card ", products);

    var list = products.map((product) => {
      return <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 mt-4">
        <div className="card shadow">
          <div className="card-body text-center">
            <h3 className="text-warning">{product.brand}</h3>
            <Link><img className="card-img-top w-50 " src={product.image} alt=". Product image " /></Link>
            <h5 onClick={() => showProductDetails(product)} className="card-title text-primary pt-2" style={{ cursor: "pointer" }}>{product.name}</h5>
            <h6>₹ {product.price} <del className="text-muted ml-2">₹ {product.price}</del></h6>
            <a onClick={() => navigate("/login", {state: {message: "Please Login to Continue..."}})} className="btn btn-dark my-2" role="button">Add to Cart</a>
          </div>
        </div>
      </div>
    })
    return list
  }
  return (
    <>
      {/* <h1 classNameName=" text-primary" > Home Page ... , Products Displayed Here </h1> */}

      <div className="container mb-4">
        <div className="row">
          {generateProductCard()}
        </div>
      </div>

    </>
  )
}

export default Home
