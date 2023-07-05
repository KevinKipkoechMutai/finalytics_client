import { Box, Typography, useTheme } from "@mui/material"




const Footer = () => {
    const { palette } = useTheme()
  return (
    <footer>
        <Box 
            style={{
                bottom: 0,
                left: 0,
                width: "100%",
                textAlign: "center",
                background: palette.background.default,
                padding: "1rem",
            }}
        >
            <Typography variant="h4">
                &copy;Finalytics {new Date().getFullYear()}. All rights reserved.
            </Typography>
        </Box>
    </footer>
  )
}

export default Footer