import React from 'react';
import AlertPage from '../Alert/AlertPage';
import Snackbar from '@mui/material/Snackbar';


export default function SnackbarPage(props:any) {
  
    return (
    <>
    <Snackbar open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
        <AlertPage />
    </Snackbar>
    </>
  )
}
