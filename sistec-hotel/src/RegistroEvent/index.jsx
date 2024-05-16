import React, { useContext } from 'react';
import ClientContext from '../components/Events';

const RegistroEvent = () =>{
     const {info} = useContext(ClientContext)
     return(
        <div>
      <h2>Auditoría de Registros</h2>
      <ul>
        {info.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
        
     );
};
export default RegistroEvent;