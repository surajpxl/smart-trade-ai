import { Outlet } from "react-router-dom";

function AdminLayout(){
    return(
        <div>
            <h2>Admin Layout</h2>
            <Outlet/>
        </div>
    )
}

export default AdminLayout;