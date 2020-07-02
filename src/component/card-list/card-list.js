import React from 'react';
import './card-list.css';
import {Card} from '../card/card'
 export const CardList = (props) =>(
 <div className='card-list'>{props.monster.map(user =>(
   <Card key={user.id} monster={user}></Card>
  ))}  </div>
 )  