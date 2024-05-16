import FormCliente from "../../components/FormEvent";
import HotelData from "../../components/DataEvent";
import { useNavigate } from "react-router-dom";

const Home = () =>{
    const navigate = useNavigate();
    const handleInfoClick = () =>{
        navigate(`/info`)
    } 
    return (
        <div style={{width: '100%',height:'100%'}}>
            <div style={{flex:1 , display:'flex',}}>
                <div style={{alignItems:'center',width: '100%',height:'100%'}}>
                    <FormCliente />
                </div>
                <div style={{alignItems:'center',width: '100%',height:'100%'}}>
                    <HotelData />
                </div>
            </div>
            <div>
                <button onClick={handleInfoClick}>
                    Ver mas
                </button>
            </div>
        </div>
    );
}
export default Home;