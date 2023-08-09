import React, { useState } from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
    import  Card from '../card/Card';

import Menu from './menu/Menu.js';



const Resturant = () => {
  const [menuData,setMenuData] = useState(Menu);
  
  return (
    <div>
   
     < Card key={Menu} Menu={Menu} />
   
  </div>
  )
}

export default Resturant