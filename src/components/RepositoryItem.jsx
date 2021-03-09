import React from 'react'
const respositoryName = 'unform';

export function RepositoryItem(props) {
    return (
        <div>
             <li>
                    <strong>{props.repository ?? 'default'}</strong>
                    <p>Form is React</p>
                    <a href="">
                        Acessar Repositório
                    </a>
                </li>            
        </div>
    )
}
