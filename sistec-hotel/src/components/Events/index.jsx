import React,{createContext,useState} from "react";
import data from '../../data/DataHabitaciones.json'

const ClientContext = createContext();

export const ClienteEvents = ({children}) => {
    const [clients, setClients]=useState([])
    const [habitaciones,setHabitaciones]=useState(data)
    const [info,setInfo]=useState([])

    const clientRegistred = (client) => {
        setClients([...clients,client]);
        
        setHabitaciones(
            habitaciones.map((habitacion) => 
            habitacion.numero === client.numeroHabitacion ? {...habitacion, estado: true}: habitacion
            )
        );

        setInfo([...info,`Cliente Registrado: ${client.nombre} - Fecha: ${client.fechaingreso} - Habitacion: ${client.numeroHabitacion}`]);  
    };

    const clientRemover = (habitacionNum) =>{
        const client = clients.find((cli) => cli.numeroHabitacion === habitacionNum);
        setClients(clients.filter((client) => client.numeroHabitacion !== habitacionNum));
        setHabitaciones(
            habitaciones.map((habitacion) => 
            habitacion.numero === habitacionNum ? {...habitacion, estado: false}: habitacion
            )
        );
        setInfo([...info,`Cliente fin Hospedaje: ${client.nombre} - Fecha: ${client.fechasalida} - Habitacion: ${client.numeroHabitacion}`]);
    };
    return(
     <ClientContext.Provider value={{clients,habitaciones,info,clientRegistred,clientRemover}}>
        {children}
     </ClientContext.Provider>
     );
};

export default ClientContext;