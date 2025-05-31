async function fetchData(url) {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts')
    data = await data.json()
    return data;
}

const Data = async () => {
    let products = await fetchData();
    console.log(products)
    return(
        <div className="px-10">
            {products?.map((p) => (
                <li key={p.id}
                className="mt-5 border px-2"
                >{p.title}</li>
            ))}
        </div>
    )
}
export default Data;