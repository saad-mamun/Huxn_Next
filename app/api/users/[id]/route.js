import { NextResponse } from "next/server"

export function GET(_, response) {
    // console.log(response.params.id)
    // return NextResponse.json({result: "Hello LITON"})
    const {id} = response.params
    return NextResponse.json({id})
}