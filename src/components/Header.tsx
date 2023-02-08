import './Header.css'
import { Search,Filter, Swap } from 'react-iconly'
import React from 'react';

function Header(){
    return(<div className='nav'>
                <div className='searchBar'>
                    <Search set="light" primaryColor="black" stroke='bold'/>
                    {/* <DeleteIcon /> */}
                    <input type="text" placeholder='Enter your search request here ...' />
                </div>
                <div className="actions">
                    {/* <Filter set="light" primaryColor="black" stroke='bold'/> */}
                    <Swap set="bold" primaryColor="black" stroke='bold'/>
                    <button className='ending'>Go to premium</button>
                </div>
            </div>)
} 

export default Header;