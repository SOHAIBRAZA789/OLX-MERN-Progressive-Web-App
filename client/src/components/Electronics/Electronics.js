import React from 'react';
import Pages from '../Pages/Pages'

const dataArray= [
    {
        name: 'Computer',
        image: './images/rent.svg',
        link:'/electronics/computer'
    },
    {
        name: 'Tv',
        image: './images/for-sale.svg',
        link:'/electronics/tv'
    },
    {
        name: 'Printer',
        image: './images/project.svg',
        link:'/electronics/printer'
    },
   
]
const Electronics = () => (
    <div>
       
        <h1> Electronics Ad Pages </h1>
        <Pages data={dataArray}/>
    </div>
);

export default Electronics ;