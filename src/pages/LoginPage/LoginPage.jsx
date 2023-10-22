import React from 'react'
import { Box, Typography, TextField, Button, Stack } from '@mui/material'
import "./LoginPage.css"
function LoginPage(){
    return(
        <Box className='box' width="100vw" height="100vh" sx={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Box className='cardCss'>
                <Typography fontWeight='700' variant='h5'>Login</Typography><br></br>
                <TextField fullWidth id="username" label="Username" variant="outlined" size='small' margin='normal'/>
                <TextField fullWidth id="password" label="Password" variant="outlined" size='small' margin='normal'/><br></br><br></br>
                <Stack alignItems='center'>
                <Button fullWidth className='button' color='info'>Submit</Button>
                </Stack>
                </Box>
        </Box>
    )
}

export default LoginPage
