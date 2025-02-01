import { Box, FormControl, InputLabel, List, MenuItem, MenuList, Select, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
   <>
        <Box bgcolor={'black'} color={'white'}position={'relative'}>
          <Typography sx={{ pl: '60px' }}>Questions? Contact us</Typography>
          <List sx={{ display: 'flex', justifyContent: 'space-between', mx: '50px', opacity: '0.7', fontSize: '10px' }}>
            <MenuList sx={{ fontSize: '10px' }}>
              <MenuItem sx={{ fontSize: '14px' }} >FAQ</MenuItem>
              <MenuItem sx={{ fontSize: '14px' }}>Media Center</MenuItem>
              <MenuItem sx={{ fontSize: '14px' }}>Redeem Gift Cards</MenuItem>
              <MenuItem sx={{ fontSize: '14px' }}>Privacy</MenuItem>
              <MenuItem sx={{ fontSize: '14px' }}>Speed Test</MenuItem>
              <MenuItem sx={{ fontSize: '14px' }}>Ad Choices</MenuItem>
            </MenuList> 
            <MenuList>
              <MenuItem sx={{ fontSize: '14px' }}>
                Cancel Membership</MenuItem>
              <MenuItem sx={{ fontSize: '14px' }}>Investor Relations</MenuItem>
              <MenuItem sx={{ fontSize: '14px' }}>Buy Gift Cards</MenuItem>
              <MenuItem sx={{ fontSize: '14px' }}>
                Cookie Preferences</MenuItem>
              <MenuItem sx={{ fontSize: '14px' }}>
                Legal Guarantee</MenuItem>
            </MenuList>
            <MenuList>
              <MenuItem sx={{ fontSize: '14px' }}>Help Center</MenuItem>
              <MenuItem sx={{ fontSize: '14px' }}>
                Jobs</MenuItem>
              <MenuItem sx={{ fontSize: '14px' }}>
                Ways to Watch</MenuItem>
              <MenuItem sx={{ fontSize: '14px' }}>Impressum</MenuItem>
              <MenuItem sx={{ fontSize: '14px' }}>
                Legal Notices</MenuItem>
            </MenuList>
            <MenuList>
              <MenuItem sx={{ fontSize: '14px' }}>
                Account</MenuItem>
              <MenuItem sx={{ fontSize: '14px' }}>
                Netflix Shop</MenuItem>
              <MenuItem sx={{ fontSize: '14px' }}>
                Terms of Use</MenuItem>
              <MenuItem sx={{ fontSize: '14px' }}>
                Contact Us</MenuItem>
              <MenuItem sx={{ fontSize: '14px' }}>
                Only on Netflix</MenuItem>
            </MenuList>
          </List>
          <Box sx={{ ml: '50px' }}>
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
            <br />
            <br />
            <Typography sx={{ opacity: '0.7', fontSize: '14px', pl: '10px' }}>Netflix Germany</Typography>
            <br />
            <br />   <br />
            <br />
          </Box>
        </Box>
   </>
  )
}
