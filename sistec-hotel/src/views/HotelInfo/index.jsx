import { Outlet } from "react-router-dom";
import ListCliente from "../../components/ListEvent";
import { useNavigate } from "react-router-dom";

const HotelInfo = () => {
    const navigate = useNavigate();
    const handleDBClick = () =>{
        navigate(`/info/DB`)
    } 
    return(
        <div>
            <ListCliente />
            <div>
                <button onClick={handleDBClick}>
                    Ver mas
                </button>
            </div>
            <Outlet />
        </div>
    );
}
export default HotelInfo;