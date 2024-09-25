import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { Facebook, GitHub, Instagram, LinkedIn, Pinterest, Twitter, YouTube } from '@mui/icons-material'

const Footer = () => {
  return (
    <Box component="footer">
        <Box>
            <NavLink to="">About us</NavLink>
            <NavLink to="">Our commitments</NavLink>
            <NavLink to="">Join us</NavLink>
            <NavLink to="">Newsletter</NavLink>
        </Box>
        <Box className="social__links">
            <Link href="https://www.facebook.com/" underline="none">
                <Facebook />
            </Link>
            <Link href="https://youtube.com/" underline="none">
                <YouTube />
            </Link>
            <Link href="https://www.instagram.com" underline="none">
                <Instagram />
            </Link>
            <Link href="https://www.pinterest.com/" underline="none">
                <Pinterest />
            </Link>
            <Link href="https://github.com/mihirksingh21" underline="none">
                <GitHub />
            </Link>

            
        </Box>
        <Box className="copyright">
            <Typography>
                Copyright © 2023 
                <Link href="https://mihirksingh21.github.io/">
                mihirksingh
                </Link>
                .
                </Typography>
        </Box>
    </Box>
  )
}

export default Footer