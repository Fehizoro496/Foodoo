import { Heart } from 'react-iconly'
import './Drawer.css'
import React from 'react';
import {MenuBook} from '@mui/icons-material/';

function Drawer(){
    return(<>
        <div className="drawer">
            
            <div className="drawerHeader">
                <div className="appName">Foodoo</div>
                <div className="drawerAvatar">A</div>
                <div className="name">Fehizoro Andrian.</div>
                <div className="identifiant">Chef de Partie</div>
                <div className="old">
                    <div className="oldIco">I</div>
                    <div className="oldNumber">21</div>
                </div>
            </div>

            <div className="drawerNav">
                <div className="tab">
                    <MenuBook/>
                    <div className="libelle">Recipes</div>
                </div>
                <div className="tab">
                    <Heart set="bold" primaryColor="grey"/>
                    <div className="libelle">Favorites</div>
                </div>
                <div className="tab">
                    <div className="ico">I</div>
                    <div className="libelle">Courses</div>
                </div>
                <div className="tab">
                    <div className="ico">I</div>
                    <div className="libelle">Community</div>
                </div>
            </div>
            
            <div className="drawerFooter">Create a team and take part in <span>TV show</span>!</div>
        
        </div>
    </>)
}

export default Drawer;