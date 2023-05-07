import React from 'react';
import { Bloco } from '../../components/bloco';

export function Header(params)
{
    return(        
        <div className='card-group shadow'>
            <Bloco 
                titulo="Débitos" 
                valor="R$ 1000" 
                classe="text-bg-secondary opacity-75"
            />
            <Bloco 
                titulo="Margem" 
                valor="R$ 1000" 
                classe="text-bg-secondary opacity-75"
            />
        </div>  
    )
}