import { redirect } from "next/navigation"

const ID = ({params}) => {
    if(params.id == 4)
        return redirect('/login')
    return <div className="container mx-auto">ID {params.id}</div>
}
export default ID