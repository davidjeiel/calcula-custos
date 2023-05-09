import React from 'react';

export function MateriaPrima(params) {
  return (
    <>
      <div className='card-title'>
          <h3>Matéria prima</h3>
          <h5>Informe como você compra sua matéria prima</h5>
      </div>
      <div className="input-group mt-2" style={{ height: "70px" }}>
        <span className="input-group-text">
            Matéria Prima
        </span>
        <input placeholder='Nome' type="text" style={{width: "40%"}} className="form-control" />
        <select className='form-select'>
          <option>
            Tipo de Medida
          </option>
          <optgroup label="Massa">
            <option>g  - Grama</option>
            <option>kg - Quilograma</option>          
            <option>mg - Miligrama</option>          
          </optgroup>
          <optgroup label="Comprimento">
            <option>m  - Metro</option>
            <option>km - Quilometro</option>          
            <option>cm - Centímetro</option>          
            <option>mm - Milímetro</option>          
          </optgroup>
          <optgroup label="Capacidade">
            <option>l  - Litro</option>
            <option>kl - Quiloliro</option>          
            <option>cm - Centílitro</option>          
            <option>ml - Milílitro</option>          
          </optgroup>

        </select>
        <input type="text" placeholder='Quantidade' className="form-control" />
        <input type="text" placeholder='Valor' className="form-control" />
        <a className="btn btn-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="56"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </a>
      </div>
    </>
  );
}
