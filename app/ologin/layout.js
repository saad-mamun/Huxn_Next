
import Footer from "@/components/Footer"
import LoginNav from "@/components/Lognav"

const Layout = ({children})=>{
    return (
        <div>
            <LoginNav/>
            {children}
            <Footer/>
        </div>
    )
}
export default Layout