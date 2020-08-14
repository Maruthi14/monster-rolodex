import React from 'react';
import './cardlist_style.css';
import {Card} from '../cards/cards.component';

export const CardList = props=>(

    <div className='card_list' >
    {props.monsters.map(el=>
    <Card  key={el.id} monster={el} />
    )} </div>)
   
    
        
      
   

