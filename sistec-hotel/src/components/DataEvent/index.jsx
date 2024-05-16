import React, { useContext } from 'react';
import ClientContext from '../Events';
const HotelData = () =>{
    const {clients, habitaciones} = useContext(ClientContext);
    const habitacionesOcupadas = habitaciones.filter((habitacion) => habitacion.occupied).length;
    const habitacionesDisponibles = habitaciones.length - habitacionesOcupadas;
 return(
    <div>
      <h2>Información del Hotel</h2>
      <p>Clientes Registrados: {clients.length}</p>
      <p>Habitaciones Ocupadas: {habitacionesOcupadas}</p>
      <p>Habitaciones Disponibles: {habitacionesDisponibles}</p>
    </div>
 );
}
export default HotelData;