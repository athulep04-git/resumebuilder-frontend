import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

function ResumeGeneratorPage() {
  return (
    <div>
      <Box sx={{ py: 8, px: { xs: 2, md: 10 }, backgroundColor: "#f9f9f9" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ textAlign: "center", mb: 6, color: "#4B007D" }}
      >
        Create a job-winning Resume in minutes
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={25}
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 4 }}
      >
        <Box
          sx={{
            flex: 1,
            p: 4,
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <Box
        component="img"
        src="https://icon-library.com/images/doc-icon-png/doc-icon-png-11.jpg"
        alt="Icon"
        sx={{ width: 60, height: 60, mb: 2 }}
      />
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Add your information
          </Typography>
          <Typography>
            Add pre-written examples to each section
          </Typography>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Step 1
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            p: 4,
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <Box
        component="img"
        src="https://cdn.icon-icons.com/icons2/1377/PNG/512/applicationpdf_92726.png"
        alt="Icon"
        sx={{ width: 60, height: 60, mb: 2 }}
      />
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Download your Resume
          </Typography>
          <Typography>
            Download and start applying
          </Typography>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Step 2
          </Typography>
        </Box>
      </Stack>

      <Box sx={{ textAlign: "center" }}>
         <Link to={"/form"}>
        <Button variant="contained" color="primary" size="large">
          LET'S START
        </Button>
        </Link>
      </Box>
    </Box>
    </div>
  )
}

export default ResumeGeneratorPage