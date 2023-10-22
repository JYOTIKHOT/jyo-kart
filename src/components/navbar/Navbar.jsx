import React from 'react'
import { Typography, AppBar, Toolbar, Stack, Grid, Button } from '@mui/material'
import FilterVintageOutlinedIcon from '@mui/icons-material/FilterVintageOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useNavigate } from 'react-router-dom';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function Navbar() {
    const navigate = useNavigate();

    return (
        <AppBar position='sticky'>
            <Grid container>
                <Grid item xs='5'>
                    <Toolbar>
                        <Stack direction='row' alignItems='center' justifyContent='space-between'>
                            <Typography variant='h5' fontFamily='cursive'> Ash<b style={{ color: "#f8f39a" }}>Ley</b></Typography>
                            <FilterVintageOutlinedIcon sx={{ fontSize: "50px" }} />
                        </Stack>
                    </Toolbar>
                </Grid>
                <Grid item xs='5'>
                    <Toolbar>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Toolbar>
                </Grid>
                <Grid item xs='2'>
                <Toolbar>
                <Stack direction='row' alignItems='center' justifyContent='flex-end' spacing={2}>
                    <ShoppingCartOutlinedIcon />
                    <Button variant='contained' onClick={() => navigate('/login')} sx={{color:"Black", backgroundColor:"whitesmoke", ":hover":{backgroundColor:"rgb(247 244 198)"}}}>
                    <Typography variant='subtitle2' fontFamily='cursive'><b>login :)</b></Typography>
                    </Button>
                </Stack>
                </Toolbar>
                </Grid>
            </Grid>
        </AppBar>

    )
}

export default Navbar