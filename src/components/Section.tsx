import './Section.css'
import React from 'react';
import Card from './Card'

function Section(){
    return(
        <div className="section">
            <div className="head">
                
                <div className="leading">
                    <div className="avatar">A</div>
                    <div className='leadingTxt'>
                        <div className="leadingTxtTitle">
                            Only the best recipes!
                        </div>
                        <div className="leadingTxtContent">
                            Today's new recipes for you
                        </div>
                    </div>
                </div>
                
                <div className="sectionHeadActions">
                    <div className="sectionHeadActionsChild">
                        <div className="actionTitle">111</div>
                        <div className="actionContent">Tutorials</div>
                    </div>
                    <div className="sectionHeadActionsChild">
                        <div className="actionTitle">222</div>
                        <div className="actionContent">Recipes</div>
                    </div>
                </div>
            </div>
            <div className="cardsWrapper">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
        )
}

export default Section;