import React from 'react'
import Footer from '../../Components/Footer'
import { Box, Button, TextField, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import { FormControl, InputLabel, List, MenuItem, MenuList, Select } from '@mui/material'
import { Link } from 'react-router-dom';

export default function Price() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (

    <>
      <Box className={'bodyy'} bgcolor={'white'} >
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} pl={'265px'}>
          <Typography fontSize={'12px'} pt={'100px'}>STEP 1 OF 3</Typography>
          <Typography variant='h5' fontSize={'30px'} >Choose the plan that’s right for you</Typography>
        </Box>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={2} flexDirection={'row'} my={'20px'}>
          <Box sx={{ width: '320px', height: '700px', borderRadius: '20px ', bgcolor: '', border: '0.5px solid black' }}>
            <Box sx={{
              width: '300px', height: '90px', background: 'rgb(2,39,120)', my: '7px',
              background: 'linear-gradient(90deg, rgba(2,39,120,1) 76%, rgba(64,60,180,1) 99%)', color: 'white', borderRadius: '20px', mx: '10px', display: 'flex', flexDirection: 'column', pl: '15px', py: '15px', position: 'relative'
            }}>
              <Typography variant='6' fontSize={'20px'} fontWeight={'bold'}>Standard with ads </Typography>
              <Typography>1080p</Typography>
              <Typography sx={{ position: 'absolute', right: '3%', bottom: '5%' }}><CheckIcon color='black' /></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2', px: '20px', mt: '30px' }}>
              <Typography variant='p' sx={{ opacity: '0.7', py: '5px', fontSize: '14px' }}>Monthly Price</Typography>
              <Typography variant='p' sx={{ fontSize: '20px', pb: '20px' }}>4.99 $</Typography>
              <Typography sx={{ border: '0.1px solid black', opacity: '0.6', fontSize: '8px' }}></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2', px: '20px', my: '10px' }}>
              <Typography variant='p' sx={{ opacity: '0.7', py: '5px', fontSize: '14px' }}>Video and sound quality</Typography>
              <Typography variant='p' sx={{ fontSize: '20px', pb: '20px' }}>Good</Typography>
              <Typography sx={{ border: '0.1px solid black', opacity: '0.6', fontSize: '8px' }}></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2', px: '20px', my: '10px' }}>
              <Typography variant='p' sx={{ opacity: '0.7', py: '5px', fontSize: '14px' }}>Resoloution</Typography>
              <Typography variant='p' sx={{ fontSize: '20px', pb: '20px' }}>1080p (Full HD)</Typography>
              <Typography sx={{ border: '0.1px solid black', opacity: '0.6', fontSize: '8px' }}></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2', px: '20px', my: '10px' }}>
              <Typography variant='p' sx={{ opacity: '0.7', py: '5px', fontSize: '14px' }}>Devices your household can watch at the same timee</Typography>
              <Typography variant='p' sx={{ fontSize: '20px', pb: '20px' }}>2</Typography>
              <Typography sx={{ border: '0.1px solid black', opacity: '0.6', fontSize: '8px' }}></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2', px: '20px', my: '10px' }}>
              <Typography variant='p' sx={{ opacity: '0.7', py: '5px', fontSize: '14px' }}>Download devices</Typography>
              <Typography variant='p' sx={{ fontSize: '20px', pb: '20px' }}>2</Typography>
              <Typography sx={{ border: '0.1px solid black', opacity: '0.6', fontSize: '8px' }}></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2', px: '20px', my: '10px' }}>
              <Typography variant='p' sx={{ opacity: '0.7', py: '5px', fontSize: '14px' }}>Ads</Typography>
              <Typography variant='p' sx={{ fontSize: '20px', pb: '20px' }}>Less than you might think</Typography>

            </Box>

          </Box>
          <Box sx={{ width: '320px', height: '700px', bgcolor: '', border: '0.1px solid black', borderRadius: '20px ' }}>
            <Box sx={{
              width: '300px', height: '90px', background: 'rgb(2,39,120)',
              background: 'linear-gradient(90deg, rgba(2,39,120,1) 51%, rgba(64,60,205,1) 78%, rgba(144,2,162,1) 85%)', color: 'white', borderRadius: '20px', mx: '10px', display: 'flex', flexDirection: 'column', pl: '15px', py: '15px', position: 'relative', my: '5px'
            }}>
              <Typography variant='6' fontSize={'20px'} fontWeight={'bold'}>Standard with ads </Typography>
              <Typography>1080p</Typography>
              <Typography sx={{ position: 'absolute', right: '3%', bottom: '5%' }}><CheckIcon color='black' /></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2', px: '20px', mt: '30px' }}>
              <Typography variant='p' sx={{ opacity: '0.7', py: '5px', fontSize: '14px' }}>Monthly Price</Typography>
              <Typography variant='p' sx={{ fontSize: '20px', pb: '20px' }}>4.99 $</Typography>
              <Typography sx={{ border: '0.1px solid black', opacity: '0.6', fontSize: '8px' }}></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2', px: '20px', my: '10px' }}>
              <Typography variant='p' sx={{ opacity: '0.7', py: '5px', fontSize: '14px' }}>Video and sound quality</Typography>
              <Typography variant='p' sx={{ fontSize: '20px', pb: '20px' }}>Good</Typography>
              <Typography sx={{ border: '0.1px solid black', opacity: '0.6', fontSize: '8px' }}></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2', px: '20px', my: '10px' }}>
              <Typography variant='p' sx={{ opacity: '0.7', py: '5px', fontSize: '14px' }}>Resoloution</Typography>
              <Typography variant='p' sx={{ fontSize: '20px', pb: '20px' }}>1080p (Full HD)</Typography>
              <Typography sx={{ border: '0.1px solid black', opacity: '0.6', fontSize: '8px' }}></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2', px: '20px', my: '10px' }}>
              <Typography variant='p' sx={{ opacity: '0.7', py: '5px', fontSize: '14px' }}>Devices your household can watch at the same timee</Typography>
              <Typography variant='p' sx={{ fontSize: '20px', pb: '20px' }}>2</Typography>
              <Typography sx={{ border: '0.1px solid black', opacity: '0.6', fontSize: '8px' }}></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2', px: '20px', my: '10px' }}>
              <Typography variant='p' sx={{ opacity: '0.7', py: '5px', fontSize: '14px' }}>Download devices</Typography>
              <Typography variant='p' sx={{ fontSize: '20px', pb: '20px' }}>2</Typography>
              <Typography sx={{ border: '0.1px solid black', opacity: '0.6', fontSize: '8px' }}></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2', px: '20px', my: '10px' }}>
              <Typography variant='p' sx={{ opacity: '0.7', py: '5px', fontSize: '14px' }}>Ads</Typography>
              <Typography variant='p' sx={{ fontSize: '20px', pb: '20px' }}>Less than you might think</Typography>

            </Box>
          </Box>
          <Box sx={{ width: '320px', height: '700px', bgcolor: '', border: '0.5px solid black', borderRadius: '20px ' }}>
            <Box sx={{
              width: '300px', height: '90px', background: 'rgb(2,39,120)',
              background: 'linear-gradient(90deg, rgba(2,39,120,1) 51%, rgba(64,60,205,1) 78%, rgba(212,0,8,1) 92%)', color: 'white', borderRadius: '20px', mx: '10px', display: 'flex', flexDirection: 'column', pl: '15px', py: '15px', position: 'relative', my: '7px'
            }}>
              <Typography variant='6' fontSize={'20px'} fontWeight={'bold'}>Standard with ads </Typography>
              <Typography>1080p</Typography>
              <Typography sx={{ position: 'absolute', right: '3%', bottom: '5%' }}><CheckIcon color='black' /></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2', px: '20px', mt: '30px' }}>
              <Typography variant='p' sx={{ opacity: '0.7', py: '5px', fontSize: '14px' }}>Monthly Price</Typography>
              <Typography variant='p' sx={{ fontSize: '20px', pb: '20px' }}>4.99 $</Typography>
              <Typography sx={{ border: '0.1px solid black', opacity: '0.6', fontSize: '8px' }}></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2', px: '20px', my: '10px' }}>
              <Typography variant='p' sx={{ opacity: '0.7', py: '5px', fontSize: '14px' }}>Video and sound quality</Typography>
              <Typography variant='p' sx={{ fontSize: '20px', pb: '20px' }}>Good</Typography>
              <Typography sx={{ border: '0.1px solid black', opacity: '0.6', fontSize: '8px' }}></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2', px: '20px', my: '10px' }}>
              <Typography variant='p' sx={{ opacity: '0.7', py: '5px', fontSize: '14px' }}>Resoloution</Typography>
              <Typography variant='p' sx={{ fontSize: '20px', pb: '20px' }}>1080p (Full HD)</Typography>
              <Typography sx={{ border: '0.1px solid black', opacity: '0.6', fontSize: '8px' }}></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2', px: '20px', my: '10px' }}>
              <Typography variant='p' sx={{ opacity: '0.7', py: '5px', fontSize: '14px' }}>Devices your household can watch at the same timee</Typography>
              <Typography variant='p' sx={{ fontSize: '20px', pb: '20px' }}>2</Typography>
              <Typography sx={{ border: '0.1px solid black', opacity: '0.6', fontSize: '8px' }}></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2', px: '20px', my: '10px' }}>
              <Typography variant='p' sx={{ opacity: '0.7', py: '5px', fontSize: '14px' }}>Download devices</Typography>
              <Typography variant='p' sx={{ fontSize: '20px', pb: '20px' }}>2</Typography>
              <Typography sx={{ border: '0.1px solid black', opacity: '0.6', fontSize: '8px' }}></Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2', px: '20px', my: '10px' }}>
              <Typography variant='p' sx={{ opacity: '0.7', py: '5px', fontSize: '14px' }}>Ads</Typography>
              <Typography variant='p' sx={{ fontSize: '20px', pb: '20px' }}>Less than you might think</Typography>

            </Box>
          
          </Box>
      

        </Box>


        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: '30px',justifyContent:'flex-start',fontSize:'10px',flexWrap:'wrap' }}>
              <Typography sx={{fontSize:'12px',pb:'10px',opacity:'0.7'}}><Link color='blue'>Learn more about an ad-supported plan.</Link> If you select an ad-supported plan, you will be required to provide your date of birth for ads personalization and other purposes<br/> consistent with the Netflix <Link>Privacy Statement.</Link></Typography>
              <Typography sx={{fontSize:'12px',pl:'50px',opacity:'0.7'}}>Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See Terms of Use for more details.</Typography>
              <Typography sx={{fontSize:'12px',pb:'20px',opacity:'0.7'}}>Only people who live with you may use your account. Add 1 extra member with Standard or up to 2 with Premium. Learn more. Watch on 4 different devices at the same time <br/> with Premium and 2 with Standard or Standard with ads.</Typography>
              <Button sx={{color:"white",backgroundColor:'red',width:'400px',height:'60px',fontWeight:'bold',fontSize:'20px',opacity:'1 !important'}}>NEXT</Button>
            </Box>




        <Box bgcolor={'white'} color={'black'} position={'relative'}>
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
            <FormControl sx={{ width: '120px', color: 'black', outline: 'white' }} >
              <InputLabel id="demo-simple-select-label" sx={{ color: 'black', outline: 'white', height: '60px' }}>English</InputLabel>
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
      </Box>


    </>
  )
}
