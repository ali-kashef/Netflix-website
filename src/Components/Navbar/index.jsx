import { AppBar, Box, Button, FormControl, InputLabel, MenuItem, Select, Toolbar } from '@mui/material'
import React from 'react'
import netflix from './../../Images/Netflix_Logo_PMS.png'
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
      Height: 128,

    },
  }));
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
  <>
    <Box className='header' sx={{ flexGrow: 1, }}>
        <AppBar position="static" sx={{ background: 'radial-gradient(circle, rgba(0,17,105,1) 0%, rgba(64,1,14,1) 100%)', justifyContent: 'space-evenly' }}>
          <StyledToolbar>
            <img src={netflix} style={{ width: '200px', height: '60px' }} />

            <Box sx={{ color: 'white', outline: 'white', justifyContent: 'center', translate: "1070px 0px" }}>
              <FormControl sx={{ width: '120px', color: 'white', outline: 'white' }} >
                <InputLabel id="demo-simple-select-label" sx={{ color: 'white', outline: 'white', height: '60px' }}>English</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>English</MenuItem>
                  <MenuItem value={20}>ecvador</MenuItem>

                </Select>
              </FormControl>
          <Link to={'/login-register'}>
          <Button
                size="medium"
                aria-label="display more actions"
                edge="end"
                color=""
                sx={{ color: 'black', backgroundColor: 'white', borderRadius: '20px', fontWeight: 'bold', my: 1, marginLeft: '10px', marginRight: '20px' }}
              >
                Sing In
              </Button></Link>
            </Box>



          </StyledToolbar>
        </AppBar>

      </Box>
  </>
  )
}
