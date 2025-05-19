"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


const LoginNav = ()=>{
    const pathName = usePathname()
    return(
        <div>
            {pathName === "/ologin/loginadmin" ? (
                   <li>
                   <Link href='/ologin/loginadmin'>Login Admin</Link>
               </li>
            ): (
                <ul className="container mx-auto px-4 flex flex-row gap-3 items-center p-2 bg-blue-300">
            <li>
                <Link href='/ologin' >Login Main</Link>
            </li>
            <li>
                <Link href="/ologin/loginuser">Regular User</Link>
            </li>
         
        </ul>
            )}
        
    </div>
    )
}
export default LoginNav