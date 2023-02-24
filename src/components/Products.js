import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import productImageHelper from '../Helper/ProductImageHelper';



function Products() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState(data);

    useEffect(() => {
        let componentMounted = true;
        const getProdcuts = async () => {
            setLoading(true);
            const response = await fetch('https://lunaticastore.id/api/v1/categories');
            if (componentMounted) {
                const dataResponse = await response.json();
                setData(dataResponse['data']);
                // var index = data.indexOf((e) => e.key == 'telkomsel')
                // data.splice(index, 1);
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProdcuts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-3 my-3">

                    <div className="position-sticky" style={{ top: "100px" }}>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => setFilter(data)}>All</button>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("electronics")}>Electronics</button>
                    </div>

                </div>

                <div className="col-md-9 py-md-3">
                    <div className="row">
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>  
                    </div>

                </div>


            </>
        )
    }

    const filterProduct = (category) => {
        const updateList = data.filter((x) => x.category === category);
        setFilter(updateList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="col-md-3 my-3">

                    <div className="position-sticky" style={{ top: "100px" }}>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => setFilter(data)}>All</button>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct("electronics")}>Electronics</button>
                    </div>

                </div>

                <div className="col-md-9 py-md-3">
                    <div className="row">
                        {data.map((product) => {
                            return (
                                <div className="col-6 col-md-6 col-lg-4 mb-3" key={product.nama}>

                                    <div className="card h-100">
                                        <img src={productImageHelper.imageProduct(product.kode)} className="m-3" style={{ height: "300px", width: "auto", objectFit: "contain" }} alt={product.nama} />
                                        <div className="m-3 mb-0">
                                            <small className="card-title">{product.nama}</small>
                                        </div>
                                        <div style={{ marginTop: "auto" }}>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="m-3"><b>${product.kode}</b></div>
                                                <NavLink className="stretched-link" to={`/product/${product.kode}`}>
                                                    <button className="btn btn-sm m-3 border-primary">
                                                        <i className="fa fa-arrow-right text-muted"></i>
                                                    </button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>


            </>
        )
    }

    return (
        <div className="container">
            <div className="row">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    )
}

export default Products