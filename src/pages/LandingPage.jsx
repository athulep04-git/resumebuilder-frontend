import React from "react";
import { Box, Typography, Button, Grid, Stack } from "@mui/material";
import bg from "../assets/bg.jpg";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div>
        <Box
          sx={{
            height: "650px",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(146, 211, 255, 0.3)",
              backdropFilter: "blur(6px)",
              padding: "40px",
              borderRadius: "10px",
              textAlign: "center",
              color: "black",
              maxWidth: "600px",
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Designed to get hired
            </Typography>
            <Typography variant="h6" gutterBottom>
              Your skills, your story, your next job — all in one.
            </Typography>
            <Link to={"/resumegenerator"}>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "#9900FF",
                  "&:hover": { backgroundColor: "#36005A" },
                }}
                href=".\"
              >
                MAKE YOUR RESUME
              </Button>
            </Link>
          </Box>
        </Box>
      </div>
      <Box sx={{ backgroundColor: "white", py: 5 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ textAlign: "center", mb: 4, mt: 4, color: "#4B007D" }}
        >
          Tools
        </Typography>

        <Stack
          direction={{ md: "row" }}
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ py: 5, px: 20 }}
        >
          <Box sx={{ flex: 1, textAlign: { md: "left" } }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Resume
            </Typography>
            <Typography>
              Create unlimited new resumes and easily edit them afterwards
            </Typography>

            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ mt: 2 }}
            >
              Cover Letters
            </Typography>
            <Typography>Easily write professional cover letters</Typography>

            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ mt: 2 }}
            >
              Jobs
            </Typography>
            <Typography>
              Automatically receive new and relevant job postings.
            </Typography>

            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ mt: 2 }}
            >
              Applications
            </Typography>
            <Typography>
              Effortlessly manage and track your job applications in an
              organized manner.
            </Typography>
          </Box>

          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Box
              component="img"
              src="https://clipground.com/images/free-resume-clipart-8.png"
              alt="Feature Image"
              sx={{
                width: { md: "60%" },
                borderRadius: 2,
              }}
            />
          </Box>
        </Stack>
      </Box>

      <div>
        <Box
          component="img"
          src="https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg"
          alt="Feature Image"
          sx={{
            width: { md: "100%" },
            height: "400px",
            objectFit: "cover",
            borderRadius: 2,
            opacity: 0.5,
          }}
        ></Box>
      </div>
      <Box sx={{ backgroundColor: "white", py: 5 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ textAlign: "center", mb: 4, mt: 4, color: "#4B007D" }}
        >
          Testimony
        </Typography>

        <Stack
          direction={{ md: "row" }}
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ py: 5, px: 20 }}
        >
          <Box sx={{ flex: 1, textAlign: { md: "left" } }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Trusted by professionals world wide
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              repudiandae unde quis ad asperiores dignissimos modi consequatur
              ducimus rem itaque earum sequi placeat, iure excepturi cumque
              laborum qui, cum labore. Ad tenetur optio beatae, doloribus
              molestiae accusantium facere officia voluptatibus maxime
              recusandae, enim exercitationem quasi aut. Quasi voluptatum magnam
              veniam, cum, ut voluptatem iure asperiores fugiat facere, maiores
              labore id! Fugiat magni omnis voluptate, atque dolorum molestias
              numquam sed sit alias eos nihil sapiente labore consequuntur
              repellat aliquid rem quidem excepturi esse! Aliquam modi facere
              officia distinctio, velit placeat eum! Temporibus eum eius earum,
              totam et ipsum quia, deleniti voluptas possimus maiores
              dignissimos, minus illum distinctio quod a molestiae ea culpa
              nostrum. Debitis, nobis vel. Ut voluptas fugit inventore sequi?
            </Typography>
          </Box>

          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Box
              component="img"
              src="https://i.pinimg.com/736x/ae/5b/ea/ae5bea92e92336cbfb96b63bd7accc78.jpg"
              alt="Feature Image"
              sx={{
                width: { md: "60%" },
                borderRadius: 2,
              }}
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default LandingPage;
