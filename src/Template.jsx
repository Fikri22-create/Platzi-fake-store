import { Outlet } from "react-router-dom"
import NavbarComponent from "./components/NavbarComponent"

export default function Template () {
    return (
        <>
            <NavbarComponent />
            {/* sama kaya @yield dilaravel, menyediakan konten dinamis yang akan berubah2 tiap halaman */}
            <Outlet />
        </>
    )
}