import React from 'react'
// importamos MaterialUI
import { Fab } from "@mui/material";
// icono
import AddIcon from '@mui/icons-material/Add';
// importo moment para la hora
//import moment from 'moment';
// importo el archivo de scss
import './SendTweet.scss';



export default function SendTweet() {



  return (
    <div className='send-tweet'>
        <Fab 
            className='send-tweet__open-modal'
            color="primary"
            aria-label='add'
        >
            <AddIcon />
        </Fab>
    </div>
  )
}
