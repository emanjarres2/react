import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function ListadoEstudiantes(props){
    return(
        <>
            <div className='container'>
                <div className='row mt-3'>
                <table className='table table-sm table-striped'>
                    <thead className='thead-dark'>
                        <tr>
                            <th><b>N°</b></th>
                            <th><b>NOMBRE COMPLETO</b></th>
                            <th><b>TELEFONO</b></th>
                            <th><b>CORREO ELECTRONICO</b></th>
                            <th><b>ESTADO CIVIL</b></th>
                            <th><b>PROGRAMA</b></th>
                            <th><b>ASIGNATURA</b></th>
                            <th><b>NOTA</b></th>
                            <th><b>ACCIONES</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.numero}</td>
                            <td>{props.nombre}</td>
                            <td>{props.telefono}</td>
                            <td>{props.correo}</td>
                            <td>{props.estado}</td>
                            <td>{props.programa}</td>
                            <td>{props.asignatura}</td>
                            <td>{props.nota}</td>
                            <td><button className='btn btn-warning'>Editar</button></td>
                        </tr>
                    </tbody>
                    <tfoot>
                            <th><b>N°</b></th>
                            <th><b>NOMBRE COMPLETO</b></th>
                            <th><b>TELEFONO</b></th>
                            <th><b>CORREO ELECTRONICO</b></th>
                            <th><b>ESTADO CIVIL</b></th>
                            <th><b>PROGRAMA</b></th>
                            <th><b>ASIGNATURA</b></th>
                            <th><b>NOTA</b></th>
                            <th><b>ACCIONES</b></th>
                    </tfoot>
                </table>
                </div>
                
            </div>
        </>
    );
}
export default ListadoEstudiantes;