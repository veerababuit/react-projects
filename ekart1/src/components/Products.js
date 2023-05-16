
import './Products.css';
import axios from "axios";
import { useEffect, useState } from "react"

function Products() {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        richDescription: "",
        image: "",
        brand: "",
        price: 0,
        countInStock: 0,
        rating: 0
    });

    const [products, setProducts] = useState([]);

    const updateValues = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        if (name === "price" || name === "countInStock" || name === "rating") {
            value = parseInt(value);
        }
        setProduct({ ...product, [name]: value })
    }

    const addProduct = (event) => {
        event.preventDefault();
        console.log("Product Added ", product);

        // her we are Adding the Product through Axios(using backend URL)
        
        axios.post("http://localhost:8089/api/v1.0.0/product/add", product).then(
            response => {
                if (response.status) {
                    alert(" Product Added Succefully ");
                    showProducts();
                }
            })
    }
    useEffect(() => {
        showProducts();
    }, [])

    const showProducts = () => {
        axios.get("http://localhost:8089/api/v1.0.0/product/list").then(
            response => {
                if (response.status) {
                    console.log("Show Products list ", response.data)
                    setProducts(response.data.products)
                }
            }
        )
    }

    const deleteProduct = async (_id) => {
        console.log("delete product", _id);
        var response = await axios.delete("http://localhost:8089/api/v1.0.0/product/" + _id);
        console.log(response);
        if (response.data.success === true) {
            alert("Product has been Deleted Successfully")
            showProducts();
        }
    }

    const getTablerows = () => {
        console.log("show products in display")
        var rows = products.map(product => {
            return <tr>
                <td>{product.brand}</td>
                <td>{product.countInStock}</td>
                <td>{product.description}</td>
                <td>{product.image}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.rating}</td>
                <td>{product.richDescription}</td>
                <td><button onClick={() => deleteProduct(product._id)} className="btn btn-outline-danger">Delete</button></td>
                <td><button className="btn btn-outline-info">Edit</button></td>
            </tr>
        })
        return rows
    }

    return (
        <>
            <div className="container mt-3">
                <div className='row'>
                    <div className="col col-md-3  mt-1"></div>

                    <div className='col col-md-6 col-sm-12 col-xs-12 border border-info p-2 rounded-5 '>
                        <h2 className="text-primary">ADD PRODUCTS</h2>
                        <form className="form-control">
                            <div className="mb-1">
                                <label for="name">Name:</label>
                                <input onChange={updateValues} type="text" className="form-control" id="p_name" placeholder="Enter Product Name" name="name" />
                            </div>
                            <div className="mb-1">
                                <label for="discription">Discription:</label>
                                <input onChange={updateValues} type="text" className="form-control" id="p_discription" placeholder="Enter Discription" name="description" />
                            </div>

                            <div className="mb-1">
                                <label for="rich_discription">Rich Discription:</label>
                                <input onChange={updateValues} type="text" className="form-control" id="rich_discription" placeholder="Enter Rich Discription" name="richDescription" />
                            </div>

                            <div className="mb-1">
                                <label for="image_url">Image URL:</label>
                                <input onChange={updateValues} type="text" className="form-control" id="" placeholder="Enter image URL" name="image" />
                            </div>

                            <div className="mb-1">
                                <label for="">Brand :</label>
                                <input onChange={updateValues} type="text" className="form-control" id="" placeholder="Enter Brand Name" name="brand" />
                            </div>

                            <div className="mb-1">
                                <label for="">Price :</label>
                                <input onChange={updateValues} type="number" className="form-control" id="" placeholder="Enter Price" name="price" />
                            </div>

                            <div className="mb-1">
                                <label for="">Count in Stock :</label>
                                <input onChange={updateValues} type="number" className="form-control" id="" placeholder="Enter Count in Stock" name="countInStock" />
                            </div>

                            <div className="mb-2">
                                <label for="">Rating :</label>
                                <input onChange={updateValues} type="number" className="form-control" id="" placeholder="Enter Rating" name="rating" />
                            </div>

                            <button onClick={addProduct} type="submit" className="btn btn-primary">Add Product</button>
                        </form>
                    </div>
                    <div className="col col-md-3 mt-3"></div>
                </div>
            </div>

            <hr />
            <h1 className="center">Displayed Products: {products.length}</h1>

            <div className="container-fluid border-3 table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    <thead className="text-bg-primary">
                        <th>Brand</th>
                        <th>CountInStock</th>
                        <th>Discription</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Rich_discription</th>
                        <th colSpan={2}>Operations</th>
                    </thead>
                    <tbody>
                        {getTablerows()}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Products