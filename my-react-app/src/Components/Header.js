import React from 'react'
import {AppBar,Container,Toolbar,Typography,Select,MenuItem} from '@mui/material';
import {useNavigate} from 'react-router-dom'
import {CryptoState} from '../CryptoContext';
function Header() {
    const navigate=useNavigate()
    const {currency,setCurrency}= CryptoState();
  return (
   
   <div>
       <AppBar color="transparent" position="static">
       <Container >
           <Toolbar>
               <Typography onClick={()=>navigate('/')} style={{color: "black",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",}}>Cryptocurrency Tracker</Typography>
               <Select   variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
             // value={currency}
              
              //onChange={(e) => setCurrency(e.target.value)}
         label="Curr"
         
         onChange={(e) => {setCurrency(e.target.value);console.log(currency)}}
         value={currency}
         style={{backgroundColor: 'white',color:'black' , width:85,height:50,marginLeft:15,}}
        >
         
         
          <MenuItem value="INR">INR</MenuItem>
          <MenuItem value="USD">USD</MenuItem>
          
        </Select>
           
           </Toolbar>
       </Container>

       </AppBar>
   </div>
  )
}

export default Header