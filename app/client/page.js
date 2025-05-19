'use client'

const Client = () =>{
    console.log("Hello from the (Client component)")
    return <div>
        <h1>Client</h1>
        <button onClick={()=>alert("Button Was Clicked")} >Click Me</button>
        </div>
}
export default Client