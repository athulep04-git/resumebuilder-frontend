import React from "react";
import { Stack, Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ py: 4, backgroundColor: "#31a6ffff", color: "#fff" }}>
      <Stack
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>Contact us</Typography>
        <Typography>rbuilder@gmail.com</Typography>
        <Typography variant="h6" fontWeight="bold">Connect with us</Typography>
        <Typography>design and build usign react</Typography>
      </Stack>
      <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
        © 2025 Your Company
      </Typography>
    </Box>
  );
}

export default Footer;
