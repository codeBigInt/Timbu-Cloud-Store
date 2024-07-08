import React from "react";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductListing from "../pages/ProductListing";

export const navArray = [
    {path: '/', element: <ProductListing />},
    {path: '/cart', element: <Cart />},
    {path: '/product/:productid', element: <Checkout />}
]