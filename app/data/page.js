"use client"
import { useEffect, useState } from "react"

const Data = () =>{
    const [product, setProduct] = useState([]);

    useEffect(()=> {
        async function fetchData() {
            let data = await fetch('https://jsonplaceholder.typicode.com/posts')
            data = await data.json()
            setProduct(data)
            console.log(data)
        }
        fetchData()
    },[]);
    return(
       <ul>
        {product?.map((p) => (
            <>
            <h1 key={p.id}
            className="text-lg font-bold "
            >{p.title}</h1>
            <p>{p.body}</p>
            </>
        ))}
       </ul>
    )
}
export default Data