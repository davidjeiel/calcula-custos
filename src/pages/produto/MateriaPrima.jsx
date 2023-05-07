import React from 'react';

export function MateriaPrima(params) {
  return (
    <>
      <div className="input-group mt-2">
        <input placeholder='Nome' type="text" className="form-control" />
        <select className='form-select'>
          <option>
            Medida
          </option>
        </select>
        <input type="text" placeholder='Quantidade' className="form-control" />
        <input type="text" placeholder='Valor' className="form-control" />
        <input type="text" placeholder='Fração' className="form-control" />
        <a className="btn btn-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
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
