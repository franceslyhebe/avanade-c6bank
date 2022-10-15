import React, { FormEvent, useState, useEffect } from "react";
import {Typography, Container, Button, Avatar, TextField, Checkbox, Grid, Box, CssBaseline, FormControlLabel, Snackbar} from '@mui/material';
import Link from "next/link";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import SnackbarPage from "../uitls/Snackbar/SnackbarPage";


type CopyProps = {
    site ?: string;
}

function Copyright(props: CopyProps){
    return(
        <Typography>
            {'Copyright ©️ '}
            <Link color="inherit" href={`https://www.${props.site}.com.br`} >
            {props.site}
            </Link>

            {' '}
            { new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const theme = createTheme();


export default function LoginPage(){
    //state com varivel
    //one way data binding, significa que o react envia dados para o DOM, o que o DOM faz não importa
    const [email, setEmail] = useState<string | undefined | null | FormDataEntryValue>('');
    const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
    const [error, setError] = useState<string | boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);

   
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    
        setPassword(data.get('email'));
        
    }

    useEffect(()=>{
    
        if(password && password.length < 6){
            setError(true)
            setErrorMessage('Senha precisa ter no mínimo 6 caracteres')
        }else if(password){
            setError(false)
            setErrorMessage('') 
            setOpen(true);
        }
    
    },[password]);

   return(
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />

            <SnackbarPage />

            <Box sx={{mt:8, display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Typography component="h1" variant="h5">
                Tela de Login
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{mt:1}}>

                <TextField margin="normal" required id="email" name="email" fullWidth label="Digite o Login" variant="standard" autoComplete="email"></TextField>
                <TextField margin="normal" type="password" required id="password" name="password" fullWidth label="Digite a Senha" variant="standard" autoComplete="current-password"></TextField>
                
                <FormControlLabel control={<Checkbox value="remember" color="primary"></Checkbox>} label="Lembrar-me"/>
                <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2}}>
                    Login
                </Button>
                {error && <Typography>{errorMessage}</Typography>}
                
            </Box>

            </Box>

            <Copyright site="avanade"/>
        </Container>
    </ThemeProvider>
   )
}