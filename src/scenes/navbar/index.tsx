import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, useTheme } from '@mui/material'
import FlexBetween from '@/components/FlexBetween'
import { Pix } from '@mui/icons-material'

type Props = {}

const Navbar = (props: Props) => {
  const { palette } = useTheme()
  const [selected, setSelected] = useState("dashboard")

  return (
    <FlexBetween 
      mb="0.25rem" 
      p="0.5rem 0rem" 
      color={palette.grey[300]}
    >
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <Pix sx={{ fontSize: "28px" }}/>
        <Typography variant='h4' fontSize="16px">Finalytics</Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <Box></Box>
        <Box></Box>
      </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar