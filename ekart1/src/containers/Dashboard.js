import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import '../components/Home.css';


function Dashboard(props) {

    // console.log("local storage Cart : ", localStorage.getItems("cart"));
    if (localStorage.getItem("cart") == null) {
        localStorage.setItem('cart', "[]");
    }
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getProducts()
    }, [])

    const addToCart = (product) => {
        // console.log(props.token);
        // alert("Item Added to the Cart.")
        console.log("addToCart Product : ", product);
        var cart = JSON.parse(localStorage.getItem("cart"));
        cart.push(product);
        console.log("cart  ", cart);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    
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

    const generateProductCards = () => {
        console.log("Product cards ", products);

        let list = products.map((product) => {
            return <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 mt-4">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <h3 className="text-warning">{product.brand}</h3>
                        <Link><img className="card-img-top w-50 " src={product.image} alt=". Product image " /></Link>
                        <h5 onClick={() => showProductDetails(product)} className="card-title text-primary pt-2" style={{ cursor: "pointer" }}>{product.name}</h5>
                        <h6>₹ {product.price}</h6>
                        <button className="btn btn-dark my-2" role="button" onClick={() => addToCart(product)}>Add to Cart</button>
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
                    {generateProductCards()}
                </div>
            </div>

        </>
    )
}
function mapStateToProps(appState) {
    console.log("dashboard appState ", appState);
    return { token: appState.accessToken };
}
export default connect(mapStateToProps, null)(Dashboard); 
