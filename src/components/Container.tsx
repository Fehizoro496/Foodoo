import './Container.css'
import Header from './Header'
import Section from './Section'
import Drawer from './Drawer'
import './main.css'
import React from 'react'

function Container(){
    return (
        <div className='container'>
            <Drawer></Drawer>
            <main>
                <Header></Header>
                <Section></Section>
            </main>
        </div>
    )
}

export default Container;