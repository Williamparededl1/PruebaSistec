import React, { useContext } from 'react';
import ClientContext from '../Events';

const ListCliente = () => {
     const {clients, clientRemover} = useContext(ClientContext)
    return (
        <div>
      <h2>Lista de Huéspedes</h2>
      <ul>
        {clients.map((client, index) => (
          <li key={index}>
            {client.nombre} - {client.identificacion} - Habitación: {client.numeroHabitacion}
            <button onClick={() => clientRemover(client.numeroHabitacion)}>Registrar Salida</button>
          </li>
        ))}
      </ul>
    </div>
    );
}
export default ListCliente;