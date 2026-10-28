import { Outlet } from "react-router-dom";

function SupplierLayout(){
    return(
        <div>
            <h2>Supplier Layout</h2>
            <Outlet/>
        </div>
    )
}

export default SupplierLayout;