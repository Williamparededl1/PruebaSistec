import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import ClientContext from '../Events';



const FormCliente = () =>{
    const { register , handleSubmit, reset} = useForm();
    //const {clients, habitaciones, info, clientRegistred, clientRemover} = useContext(ClientContext)
    const { habitaciones, clientRegistred} = useContext(ClientContext)
    console.log (useContext(ClientContext))
   

    const handleEnviarForm = (data)=>{
        clientRegistred(data)
        reset();
    };



    return(
    <div>
        <form onSubmit={handleSubmit(handleEnviarForm)} >
            <label>
                Nombre
                <input type="text" {...register('nombre')} required/>
            </label>
            <br />
            <label >
                CI
                <input type="text" {...register('identificacion')} required/>
            </label>
            <br />
            <label >
            Número de Habitación:
                <select {...register('numeroHabitacion')} required>
                <option value="">Seleccione una habitación</option>
                    {habitaciones.map((habitacion) =>
                        !habitacion.estado ? <option key={habitacion.numero} value={habitacion.numero}>{habitacion.numero}</option> : null
          )}
        </select>
            </label>
            <br />
            <label >
                Fecha ingreso:
                <input type="date" {...register('fechaingreso')} required/>
            </label>
            <br />
            <label >
                Fecha Salida:
                <input type="date" {...register('fechasalida')} required/>
            </label>
            <br />
            <button type="submit">Registrar Huésped</button>

        </form>
    </div>
    );

}
export default FormCliente;