"use client"

const User = ({params}) =>{
    console.log(params);
    return <div>All About {params.user}</div>
}
export default User