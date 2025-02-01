import React from 'react'
import './style.css'
import netflix from './../../Images/Netflix_Logo_PMS.png'

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Diversity2, WidthNormal } from '@mui/icons-material';
import { Button, List, ListItemText, ListSubheader, MenuList, Stack, TextField } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import banner from './../../Images/DE-en-20241104-TRIFECTA-perspective_2f15a6cc-0362-43e7-b9ef-af13ba0286c6_large.jpg'
import { Link } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import 'swiper/css';
import 'swiper/css/pagination';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useRef, useState } from 'react';
import EscalatorWarningTwoToneIcon from '@mui/icons-material/EscalatorWarningTwoTone';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import NoiseAwareIcon from '@mui/icons-material/NoiseAware';

// import required modules
import { Pagination } from 'swiper/modules';
import one from './../../Images/AAAABQqKUHdoUE8baxrPHDRNQ-Grqrj07X3e_ES9nZcCZX3_KlIkABetCC_sSiRCwztZDKTT26OIDRmuVgZMkQmC9S9KlKL7Pz9pPrAMBy4kq3V2bwH4Ga8f4RQRXvfpCupltTNTpA.webp'
import tow from './../../Images/AAAABRY13rE6hFZeP981fDAgmKTcN4P0SzIOzCS8PMVNcm1A41O8G1dqia0SGeBUzBvFiH3JX_ugRAq5nbRkhsb4FpQy6PLwZyRw5cTO7EjbrO8YX7-Pk2joGpoaBQYi6RwFo4p11Q.webp'
import three from './../../Images/AAAABRY13rE6hFZeP981fDAgmKTcN4P0SzIOzCS8PMVNcm1A41O8G1dqia0SGeBUzBvFiH3JX_ugRAq5nbRkhsb4FpQy6PLwZyRw5cTO7EjbrO8YX7-Pk2joGpoaBQYi6RwFo4p11Q.webp'
import four from './../../Images/AAAABSwRif5QdWh-2zuPkAgjFlTpSkk3MDVDJTv5laeZUBJ-PeefkJT4aMLZx7IrcrKBMlpfG032dA_pS31uG0_vBkhB71HxvBDbmoRc.webp'
import five from './../../Images/AAAABU9qtpzERgDs8SG_L1cCWN_vnsG9aEWNerBC5zJRxbpBBTQrWSFr8jmgILQHBuHiKATVHh2ZC6JXfqO4dECIb1l5Vg5DUfmlNDXkB_N657r05jCbgD7lnHrBvbUApu4ZbedTSQ.webp'
import six from './../../Images/AAAABUFEiO-S1eKH8VZMxbQVuGWRim8MF8XF8ZW0AtL6lyIgrNdZngwwVWRFyZRN_V1g5jfMb6SzDUCEsFIugF_WkfnMgjHCuFIx4LnAP_44qQ6SWp_DaxEhjJoNjqRN7N68Bo6Lqg.webp'
import seven from './../../Images/AAAABWCLHg8BC2YOYQwrkDmAfx9TRDnrs0Kjni5bXAeXeG-HcwBKZaAf6clBMbjc8CWqJ-5iCqeLbFJr8mZ7-9wPnIXWTZ8kICWwXsbk_qDcd0cckFpr9V6cQfXyS51FGZLbEKXChA.webp'
import Navbar from '../../Components/Navbar';









export default function Home() {
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
    
      <Box sx={{ width: '100%', height: '60vh', mx: 'auto', my: '20px', borderRadius: '20px solid white' }}>
        <img src={banner} width={"95%"} height={'100%'} style={{ objectFit: {md:'fill'}, borderRadius: '20px', border: 'Highlight', position: 'relative', opacity: '0.5', borderColor: '3px white', marginLeft: '40px' }} />
        <Box sx={{ position: 'absolute', color: 'white', top: '25%', right: '30%' }}>
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Endless entertainment starts here.</Typography>
          <Typography variant='h4' sx={{ fontWeight: 'bold', pl: '150px' }}> Palns from  $4.99.</Typography>
          <Typography variant='h6' sx={{ fontWeight: '500', pl: '150px' }}>Cancell or switch plans enytime.</Typography>

        </Box>
        <Box sx={{display:{xs:'none',sm:'none',md:'flex'}}}>
        <Link to={'/price'}>
          <Box sx={{
            width: '420px', height: '250px', backgroundColor: 'gray', position: 'absolute', top: '50%', borderRadius: '20px', mx: '80px', background: 'rgb(51,71,237)',
            background: 'linear-gradient(90deg, rgba(0,14,126,1) 17%, rgba(3,3,87,1) 31%, rgba(1,1,28,1) 95%)', color: 'white', py: '30px', px: '20px',
          }}>
            <Typography variant='h5' sx={{ opacity: '0.9', mb: '10px ' }}>Standard with ads</Typography>
            <Typography variant='h6' sx={{ opacity: '0.7', mb: '10px ' }} fontWeight={'bold'}>1080p</Typography>
            <Typography variant='' sx={{ opacity: '0.7' }}><CheckIcon sx={{ height: '20px', }} />  Good video quality</Typography>
            <Typography sx={{ opacity: '0.7', mb: '10px ' }}> <CheckIcon sx={{ height: '20px' }} /> Less ads than you might think</Typography>
            <Typography sx={{ opacity: '0.7', fontWeight: 'bold' }}> $4.99 /mo</Typography>
          </Box>
        </Link>

    <Link to={'/price'}>  
      <Box sx={{
          width: '420px', height: '250px', backgroundColor: 'gray', position: 'absolute', top: '50%', borderRadius: '20px', right: '36%', background: ' rgb(57,7,80)',
          background: 'linear-gradient(90deg, rgba(57,7,80,1) 1%, rgba(42,4,62,1) 17%, rgba(35,12,61,1) 31%, rgba(20,1,31,0.9893207282913166) 95%)', color: 'white', py: '30px', px: '20px'
        }}>
          <Typography variant='h5' sx={{ opacity: '0.9', mb: '10px ' }}>Standard </Typography>
          <Typography variant='h6' sx={{ opacity: '0.7', mb: '10px ' }} fontWeight={'bold'}>1080p</Typography>
          <Typography variant='' sx={{ opacity: '0.7' }}><CheckIcon sx={{ height: '20px', }} />  Good video quality</Typography>
          <Typography sx={{ opacity: '0.7', mb: '10px ' }}> <CheckIcon sx={{ height: '20px' }} /> Less ads than you might think</Typography>
          <Typography sx={{ opacity: '0.7', fontWeight: 'bold' }}> $4.99 /mo</Typography>
        </Box>
        </Link>
        <Link to={'/price'}>  
        <Box sx={{
          width: '420px', height: '250px', backgroundColor: 'gray', position: 'absolute', top: '50%', borderRadius: '20px', right: '4%', mx: '50px',
          background: 'rgb(117,0,140)',
          background: 'linear-gradient(90deg, rgba(97,1,37,1) 0%, rgba(42,4,62,1) 15%, rgba(35,12,61,1) 31%, rgba(20,1,31,0.9893207282913166) 95%)', color: 'white', py: '30px', px: '20px'
        }}>
          <Typography variant='h5' sx={{ opacity: '0.9', mb: '10px ' }}>Premium</Typography>
          <Typography variant='h6' sx={{ opacity: '0.7', mb: '10px ' }} fontWeight={'bold'}>1080p</Typography>
          <Typography variant='' sx={{ opacity: '0.7' }}><CheckIcon sx={{ height: '20px', }} />  Good video quality</Typography>
          <Typography sx={{ opacity: '0.7', mb: '10px ' }}> <CheckIcon sx={{ height: '20px' }} /> Less ads than you might think</Typography>
          <Typography sx={{ opacity: '0.7', fontWeight: 'bold' }}> $4.99 /mo</Typography>
        </Box>
        </Link>
        </Box>
        <Box my={'100px'} width={'100%'} flexDirection={'row'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={3}>
          <input placeholder='Email Aderss' style={{ borderRadius: '20px', width: '350px', height: '60px', backgroundColor: 'black', padding: '0px 20px',color:'white' }} />
          <Button sx={{ backgroundColor: 'red', borderRadius: '20px', height: '60px', width: '200px', color: 'white', fontWeight: 'bold' }}> Get started</Button>
        </Box>
        <Box display={'flex'} sx={{ color: 'white' }} flexDirection={'column'}>
          <Typography variant='h5' fontWeight={'bolder'} mb={'20px'} pl={'70px'}> Trending Now</Typography>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><img src={one} /></SwiperSlide>
            <SwiperSlide><img src={tow} /></SwiperSlide>
            <SwiperSlide><img src={three} /></SwiperSlide>
            <SwiperSlide><img src={four} /></SwiperSlide>
            <SwiperSlide><img src={five} /></SwiperSlide>
            <SwiperSlide><img src={six} /></SwiperSlide>
            <SwiperSlide><img src={seven} /></SwiperSlide>

          </Swiper>

        </Box>
        <Box display={'flex'} sx={{ color: 'white' }} flexDirection={'column'} mt={'50px'}>
          <Typography variant='h5' fontWeight={'bolder'} mb={'20px'} pl={'70px'}> Only on Netflix</Typography>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><img src={seven} /></SwiperSlide>
            <SwiperSlide><img src={six} /></SwiperSlide>
            <SwiperSlide><img src={five} /></SwiperSlide>
            <SwiperSlide><img src={four} /></SwiperSlide>
            <SwiperSlide><img src={three} /></SwiperSlide>
            <SwiperSlide><img src={tow} /></SwiperSlide>
            <SwiperSlide><img src={one} /></SwiperSlide>

          </Swiper>

        </Box>
        <Box bgcolor={'black'}>
          <Box color={'white'} sx={{ justifyContent: 'center', width: '100%', bgcolor: 'black' }}>


            <Typography variant='h5' pl={'80px'} mt={'50px'} fontWeight={'bolder'} pt={'30px'}>More Reasons to Join</Typography>
            <Box display={'flex'} flexDirection={'row'} gap={3} justifyContent={'center'} alignItems={'center'}>
              <Box sx={{ backgroundColor: 'rgb(51, 51, 51)', pl: '', mt: '30px', width: '310px', height: '120px', borderRadius: '20px', flexDirection: 'column', display: 'flex', pt: '20px', alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 'bold' }}>Stories tailored to your taste</Typography>
                <br />

                <Diversity2 sx={{ fontSize: '40px' }} />
              </Box>
              <Box sx={{ backgroundColor: 'rgb(51, 51, 51)', pl: '', mt: '30px', width: '310px', height: '120px', borderRadius: '20px', flexDirection: 'column', display: 'flex', pt: '20px', alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 'bold' }}>Stories tailored to your taste</Typography>
                <br />


                <NoiseAwareIcon sx={{ fontSize: '40px' }} />
              </Box>
              <Box sx={{ backgroundColor: 'rgb(51, 51, 51)', pl: '', mt: '30px', width: '310px', height: '120px', borderRadius: '20px', flexDirection: 'column', display: 'flex', pt: '20px', alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 'bold' }}>Stories tailored to your taste</Typography>
                <br />

                <EscalatorWarningTwoToneIcon sx={{ fontSize: '40px' }} />

              </Box>
              <Box sx={{ backgroundColor: 'rgb(51, 51, 51)', pl: '', mt: '30px', width: '310px', height: '120px', borderRadius: '20px', flexDirection: 'column', display: 'flex', pt: '20px', alignItems: 'center' }}>
                <Typography variant='' sx={{ fontWeight: 'bold' }}>Stories tailored to your taste</Typography>
                <br />

                <LiveTvRoundedIcon sx={{ fontSize: '40px' }} />
              </Box>
            </Box>
          </Box>
          <Box color={'white'} sx={{ bgcolor: 'black' }}>
            <Typography variant='h5' pl={'80px'} mt={'50px'} fontWeight={'bold'}>Frequently Asked Questions</Typography>

            <Box display={'flex'} flexDirection={'column'} gap={1} justifyContent={'center'} alignItems={'center'} mt={2}>
              <Accordion sx={{ width: '90%', backgroundColor: 'rgb(51, 51, 51)', color: 'white', height: '60px', borderRadius: '20px !important' }}>
                <AccordionSummary sx={{height:'40px'}}
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="panel1-content"
          id="panel1-header"
                >
                  Accordion 1
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: '90%', backgroundColor: 'rgb(51, 51, 51)', color: 'white', height: '60px', borderRadius: '20px !important' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Accordion 1
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: '90%', backgroundColor: 'rgb(51, 51, 51)', color: 'white', height: '60px', borderRadius: '20px  !important' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Accordion 1
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: '90%', backgroundColor: 'rgb(51, 51, 51)', color: 'white', height: '60px', borderRadius: '20px  !important' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Accordion 1
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ width: '90%', backgroundColor: 'rgb(51, 51, 51)', color: 'white', height: '60px', borderRadius: '20px  !important' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Accordion 1
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
             <Link to={'/login-register'}> <Button sx={{ bgcolor: 'red', color: 'white', width: '170px', borderRadius: '20px', mt: '40px', height: '40px', position: 'sticky' }}>Get started</Button></Link>
            </Box>

          </Box>
        </Box>
        <Box bgcolor={'black'} color={'white'}>
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

      </Box>



    </>
  )
}
