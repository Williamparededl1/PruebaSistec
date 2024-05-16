import { Outlet } from "react-router-dom";
const HotelInfo = () => {
    return(
        <div>
            Lista de Huespedes
            <Outlet />
        </div>
    );
}
export default HotelInfo;