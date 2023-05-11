import React, { useEffect, useState } from 'react';

export function MateriaPrima({materiaPrima, setMateriaPrima}) {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [valor, setValor] = useState('')

  const handleCadastro = ()=>{
    const newMateriaPrima = [...materiaPrima, { "nome": nome, "tipo": tipo, "quantidade": quantidade, "valor": valor }];
    setMateriaPrima( newMateriaPrima ) ;
  }

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
        <input placeholder='Nome' type="text" style={{width: "40%"}} className="form-control" onChange={(e)=>setNome(e.target.value)}/>
        <select className='form-select' onChange={(e)=>setTipo(e.target.value)}>
          <option>
            Tipo de Medida
          </option>
          <optgroup label="Massa">
            <option value="g">g  - Grama</option>
            <option value="kg">kg - Quilograma</option>          
            <option value="mg">mg - Miligrama</option>          
          </optgroup>
          <optgroup label="Comprimento">
            <option value="m">m  - Metro</option>
            <option value="km">km - Quilometro</option>          
            <option value="cm">cm - Centímetro</option>          
            <option value="mm">mm - Milímetro</option>          
          </optgroup>
          <optgroup label="Capacidade">
            <option value="l">l  - Litro</option>
            <option value="kl">kl - Quiloliro</option>          
            <option value="cm">cm - Centílitro</option>          
            <option value="ml">ml - Milílitro</option>          
          </optgroup>

        </select>
        <input type="text" placeholder='Quantidade' className="form-control" onChange={(e)=>setQuantidade(e.target.value)}/>
        <input type="text" placeholder='Valor' className="form-control" onChange={(e)=>setValor(e.target.value)}/>
        <a className="btn btn-success" onClick={()=>handleCadastro()}>
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
