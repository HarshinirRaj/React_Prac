import MainHeader from '../Components/MainHeader'
import { Outlet } from 'react-router-dom'

function RootLayout (){
    return <>
        <MainHeader />
        {/* place holder for the nested routes i.e., where the inner routes should be loaded */}
        <Outlet />
    </>
}

export default RootLayout;