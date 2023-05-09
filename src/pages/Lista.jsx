import React from "react";

export function Lista(params)
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
                <tr>
                    <td  className="text-center" style={{ paddingTop: "1.2%" }}>teste</td>
                    <td  className="text-center" style={{ paddingTop: "1.2%" }}>teste</td>
                    <td  className="text-center" style={{ paddingTop: "1.2%" }}>teste</td>
                    <td  className="text-center">
                        <input className="form-control"/>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}