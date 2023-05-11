import React from "react";

export function Lista({materiaPrima, setMateriaPrima})
{
    return(                                 
        <table className="table table-bordered table-striped table-hover mt-2">
            <thead>
                <tr className="text-center active">
                    <th style={{ width: "50%" }}>Matéria Prima</th>
                    <th>Tipo de Medida</th>
                    <th>Quantidade por produto</th>
                    <th>Valor</th>                         
                </tr>
            </thead>
            <tbody>
                {
                    materiaPrima.map((materia)=>{
                        <tr>
                            <td  className="text-center" style={{ paddingTop: "1.2%" }}>{ materia.nome }</td>
                            <td  className="text-center" style={{ paddingTop: "1.2%" }}>{ materia.tipo }</td>
                            <td  className="text-center" style={{ paddingTop: "1.2%" }}>{ materia.quantidade }</td>
                            <td  className="text-center">
                                <input className="form-control" value={ materia.quantidade }/>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}