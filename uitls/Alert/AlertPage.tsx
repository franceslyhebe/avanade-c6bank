import React, {useState} from 'react'
import MuiAlert, { AlertProps } from '@mui/material/Alert';

export default function AlertPage(props:any) {
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const [open, setOpen] = useState<boolean>(false);
  
  const handleClick = () => {
    setOpen(true);
  };


const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};

  return (
    <Alert onClose={props.handleClose} severity="success" sx={{ width: '100%' }}>
        Usuário logado com sucesso! ...Aguarde...
    </Alert>
  )
}
