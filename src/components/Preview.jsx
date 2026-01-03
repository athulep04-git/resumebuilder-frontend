import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Divider,
  Stack,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';
import { addHistoryAPI } from "../services/allAPIs";
import Swal from 'sweetalert2';
import Edit from "./Edit";

function Preview({ formData }) {
  console.log(formData);
  const {
    personalDetails,
    contactDetails,
    education,
    professionalDetails,
    skills,
  } = formData;
const [resumeid,setresumeid]=useState('')
const [updatedData,setUpdatedData]=useState({})
const [buttonStatus,setbuttonstatus]=useState(false)
  const handlePdfDownload= async ()=>{
    console.log("Download PDF clicked");
    //to get the div content as PDF
    console.log(document.getElementById("result"));
    //to create canvas from the div 
    //html2canvas library to take a screenshot of a specific HTML element and convert it  into a canvas element
    const canvas = await html2canvas(document.getElementById("result"),{scale:3})
    console.log(canvas);//it returns promise
    //convert canvas to image using toDataURL
    const imgData = canvas.toDataURL('image/png')
    console.log(imgData)
    //PDF generation
    const pdf=new jsPDF('p','mm','a4');
    //define width and height
    const pdfWidth=pdf.internal.pageSize.getWidth()
    const pdfHeight=(canvas.height*pdfWidth)/canvas.width;
    //add image to pdf
    pdf.addImage(imgData,'PNG',0,0,pdfWidth,pdfHeight);
    //save pdf
    pdf.save('resume.pdf')
    const timezone = new Date()
    console.log(timezone);
    const formatedDate=`${timezone.toLocaleDateString()},${timezone.toLocaleTimeString()}`
    console.log(formatedDate);
    

     try{
    const response=await addHistoryAPI({...formData,formatedDate,imgData})
      console.log(response);
      setresumeid(response.data.id)

      Swal.fire({
      title: 'Success!',
      text: 'Resume Downloaded',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    setbuttonstatus(true)
      }catch(err){
        Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'OK'
    })
      }
  }
  const handleUpdatedData=async(data)=>{
    setUpdatedData(data)
  }
  useEffect(()=>{
    if(updatedData){
      setUpdatedData(updatedData)
    }
  },[updatedData])

  return (
    
    <div>
      <Stack direction={"row"} justifyContent={"center"} spacing={2}>
        <Button variant="contained" onClick={handlePdfDownload}>Download</Button>
        {
          buttonStatus && <Stack direction='row' justifyContent={'space-between'} flexWrap={'wrap'}>
        
        
        <Edit resumeId={resumeid} onUpdate={handleUpdatedData}/>
        <Link to={'/history'}>
            <Button variant="contained">History</Button>
        </Link>
        </Stack>
        }
      </Stack>
      <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        m: 2,
      }}
    >
      <Paper id="result"
        elevation={3}
        sx={{
          width: 500,
          minHeight: 600,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          component="h2"
          marginTop={"20px"}
        >
          {updatedData && updatedData?.personalDetails?.name?updatedData.personalDetails.name:personalDetails.name?personalDetails.name:"Full Name"}

          {/* {personalDetails.name != "" ? personalDetails.name : "Full Name"} */}
        </Typography>

        <Typography align="center">

           {updatedData && updatedData?.personalDetails?.title?updatedData.personalDetails.title:personalDetails.title?personalDetails.title:"Title"}
        </Typography>
        <Typography align="center">
          {updatedData && updatedData?.personalDetails?.location?updatedData.personalDetails.location:personalDetails.location?personalDetails.location:"Location"}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Typography variant="h6" align="center">
          Contact
        </Typography>
        <Typography align="center">
          {updatedData && updatedData?.contactDetails?.email?updatedData.contactDetails.email:contactDetails.email?contactDetails.email:"Email"}|{" "}
          {updatedData && updatedData?.contactDetails?.phonenumber?updatedData.contactDetails.phonenumber:contactDetails.phonenumber?contactDetails.phonenumber:"Phone number"}
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <a
            href={contactDetails.github}
            target="_blank"
            underline="hover"
          >
            <FaGithub size={22} />
          </a>

          <a
            href={contactDetails.linkedIn}
            target="_blank"
            underline="hover"
          >
            <FaLinkedin size={22} />
          </a>

          

          <a
            href={contactDetails.portfolio}
            target="_blank"
            underline="hover"
          >
            Portfolio
          </a>
        </Stack>

        <Divider sx={{ my: 2 }} />
        <Typography align="center" fontWeight={500}>
          Summary
        </Typography>
        <Typography align="center" variant="body2" sx={{ mt: 1, px: 2 }}>
          {formData.summary}
        </Typography>

        <Divider sx={{ my: 2 }} />
        <Typography align="center" fontWeight={500}>
          Education
        </Typography>
        <Typography
          align="center"
          fontWeight={600}
          sx={{ mt: 0.5 }}
        ></Typography>
        <Typography align="center" variant="body2">
           {updatedData && updatedData?.education?.course?updatedData.education.course:education.course?education.course:"Course Name"}|
           {updatedData && updatedData?.education?.college?updatedData.education.college:education.college?education.college:"College Name"}|{" "}
           {updatedData && updatedData?.education?.university?updatedData.education.university:education.university?education.university:"University"}|{" "}
           {updatedData && updatedData?.education?.year?updatedData.education.year:education.year?education.year:"Year of pass"}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography align="center" fontWeight={500}>
          Professional Details
        </Typography>
        <Typography align="center">

          {updatedData && updatedData?.professionalDetails?.jobtitle?updatedData.professionalDetails.jobtitle:professionalDetails.jobtitle?professionalDetails.jobtitle:"Job or Internship"}

        </Typography>
        <Typography align="center" variant="body2">
        {updatedData && updatedData?.professionalDetails?.company?updatedData.professionalDetails.company:professionalDetails.company?professionalDetails.company:"Companyname"}|{" "}

        {updatedData && updatedData?.professionalDetails?.location?updatedData.professionalDetails.location:professionalDetails.location?professionalDetails.location:"Location"}{" "}|{" "}

        {updatedData && updatedData?.professionalDetails?.duration?updatedData.professionalDetails.duration:professionalDetails.duration?professionalDetails.duration:"Duration"}
        
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography align="center" fontWeight={500}>
          Skills
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={2}>
          {
            skills.map(item=>(
              <Button variant="contained">{item}</Button>
            )

            )
          }
        </Stack>
      </Paper>
    </Box>
    </div>
    
  );
}

export default Preview;
