import './Main.css'
import React from 'react'
import Header from './Header'

export default props => 
    <React.Fragment>
        {/* Passa o className específico (se fornecido) para o Header */}
        <Header {...props} className={props.className || ''} />
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>
