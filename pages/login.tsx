import React, { FormEvent, useState } from "react";
import {Typography, Container, Button, Avatar, TextField, Checkbox, Grid, Box, CssBaseline, FormControlLabel} from '@mui/material';
import Link from "next/link";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { setDefaultResultOrder } from "dns/promises";

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
    const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
    const [error, setError] = useState<string | boolean>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
        //Não envia o formulario
        event.preventDefault();
        //FormData nativo do JS, permite pegar os dados do form
        const data = new FormData(event.currentTarget);
        //a senha é guardada em um estado e vai para analise
        setPassword(data.get('password'));
        if(password && password.length < 6){
            setError(true);
            setErrorMessage("Tá de brincadeira, coloca uma senha maior ai");
        }
        
        //console.log somente pra verificar os dados
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        })


    }



   return(
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
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