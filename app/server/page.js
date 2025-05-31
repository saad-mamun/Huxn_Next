async function fetchData() {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts')
    data = await data.json()
    return data
}

const Data = async () => {
    let products = await fetchData();

    console.log(products)
    return(
        <div>
            <ul>
                {products?.map((p) => (
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default Data