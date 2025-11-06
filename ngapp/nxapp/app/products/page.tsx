"use client";
import { useState, useEffect } from 'react';


export default function Products() {
const [product, setProduct] = useState(null)
useEffect(() => {
const fetchProduct = async () => {
const response = await fetch('https://dummyjson.com/products/1')
const data = await response.json()
setProduct(data)
}
fetchProduct()
}, [])
return (
<>
<div>
{product ? (
<p>{ product.title } - { product.description }</p>
) : (
<p>Loading product...</p>
)}
</div>
</>
);
}