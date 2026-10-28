import { Outlet } from "react-router-dom";

function RetailerLayout(){
    return(
        <div>
            <h2>Retailer Layout</h2>
            <Outlet/>
        </div>
    )
}

export default RetailerLayout;