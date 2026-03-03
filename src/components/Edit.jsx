import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAResumeAPI, updateAResumeAPI } from '../services/allAPIs';
import Stack from '@mui/material/Stack';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  boxShadow: 24,
  border:'2px solid #000',
  p: 4,
  scrollY:'auto',
  maxHeight: "90vh",
  overflowY: "auto",
};


function Edit({resumeId,onUpdate}) { 
  console.log(resumeId);
   

  const[resumedata,setresumedata]=useState({
    id:'',
 personalDetails:{
      name:"",
      title:'',
      location:''
    },
    contactDetails:{
      email:'',
      phonenumber:'',
      github:'',
      linkedIn:'',
      portfolio:''
    },
    education:{
      course:'',
      college:'',
      university:'',
      year:''
    },
    professionalDetails:{
      jobtitle:'',
      company:'',
      location:'',
      duration:''
    },
    skills:[],
    summary:''
  })

//to hold skills from userside
const [InputSkill,setInputSkill]=useState('')
console.log(InputSkill);



  //get a resume details by id and set those details in the form field for editing
const getResumeDetailsById=async(id)=>{
  console.log("in edit "+id);
  const response=await getAResumeAPI(id);
  console.log(response);
  setresumedata(response.data)
  
  
}
console.log(resumedata);
useEffect(() => {
    getResumeDetailsById(resumeId);
  }, [resumeId]);

  const handleUpdate= async ()=>{
    //api call to update the resume details by id 
    console.log("update called");
    const response=await updateAResumeAPI(resumeId,resumedata);
    console.log(response);
    onUpdate(response.data);
    alert("resume updated successfully")
    
     
  }

  // const addskill=(skill)=>{
  //   console.log(skill);
  //   if(resumedata?.skills?.includes(skill)){
  //     alert("skill already existing")
  //   }
    
  // }
  const addskill = (skill) => {
  if (!skill.trim()) return;

  if (resumedata?.skills?.includes(skill)) {
    alert("skill already existing");
  } else {
    setresumedata({
      ...resumedata,
      skills: [...resumedata.skills, skill]
    });
    setInputSkill('');
  }
};

const removeskill = (skillToRemove) => {
  setresumedata({
    ...resumedata,
    skills: resumedata.skills.filter(skill => skill !== skillToRemove)
  });
};




  const [open, setOpen] = React.useState(false);
  const handleOpen = async () => {
  if (resumeId) {
    await getResumeDetailsById(resumeId);
  }
  setOpen(true);
};

  const handleClose = () => setOpen(false);

  return (
    <>


      <div>
        <Button variant="contained" onClick={handleOpen}>Edit</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            
            <Typography id="modal-modal-title" variant="h6" component="h3" width={"100%"}>
            <h3>Personal details</h3>
              <TextField  fullWidth value={resumedata?.personalDetails?.name} onChange={(e)=>setresumedata({...resumedata,personalDetails:{...resumedata.personalDetails,name:e.target.value}})} label="Full Name" variant="standard" />
              <TextField fullWidth value={resumedata?.personalDetails?.title} onChange={(e)=>setresumedata({...resumedata,personalDetails:{...resumedata.personalDetails,title:e.target.value}})} label="Job Title" variant="standard"  />
              <TextField fullWidth value={resumedata?.personalDetails?.location} onChange={(e)=>setresumedata({...resumedata,personalDetails:{...resumedata.personalDetails,location:e.target.value}})} label="Location" variant="standard"  />

            <h3>Contact details</h3>
              <TextField fullWidth value={resumedata?.contactDetails?.email} onChange={(e)=>setresumedata({...resumedata,contactDetails:{...resumedata.contactDetails,email:e.target.value}})} label="Email"  variant="standard"  />
              <TextField fullWidth value={resumedata?.contactDetails?.phonenumber} onChange={(e)=>setresumedata({...resumedata,contactDetails:{...resumedata.contactDetails,phonenumber:e.target.value}})} label="Phone Number" variant="standard"  />
              <TextField fullWidth value={resumedata?.contactDetails?.github} onChange={(e)=>setresumedata({...resumedata,contactDetails:{...resumedata.contactDetails,github:e.target.value}})} label="GitHub Profile Link" variant="standard"  />
              <TextField fullWidth value={resumedata?.contactDetails?.linkedIn} onChange={(e)=>setresumedata({...resumedata,contactDetails:{...resumedata.contactDetails,linkedIn:e.target.value}})} label="Linkedin Profile Link" variant="standard"  />
              <TextField fullWidth value={resumedata?.contactDetails?.portfolio} onChange={(e)=>setresumedata({...resumedata,contactDetails:{...resumedata.contactDetails,portfolio:e.target.value}})} label="Protfolio Link" variant="standard"  />

            <h3>Education details</h3>

              <TextField fullWidth  value={resumedata?.education?.course} onChange={(e)=>setresumedata({...resumedata,education:{...resumedata.education,course:e.target.value}})} label="Course Name" variant="standard"  />
              <TextField fullWidth value={resumedata?.education?.college}  onChange={(e)=>setresumedata({...resumedata,education:{...resumedata.education,college:e.target.value}})} label="College Name" variant="standard"  />
              <TextField fullWidth value={resumedata?.education?.university} onChange={(e)=>setresumedata({...resumedata,education:{...resumedata.education,university:e.target.value}})}  label="University" variant="standard"  />
              <TextField fullWidth value={resumedata?.education?.year}  onChange={(e)=>setresumedata({...resumedata,education:{...resumedata.education,year:e.target.value}})} label="Year of PassOut" variant="standard"  />

            <h3>Professional Details</h3>
              <TextField fullWidth value={resumedata?.professionalDetails?.jobtitle}
              onChange={(e)=>setresumedata({...resumedata, professionalDetails:{...resumedata.professionalDetails, jobtitle:e.target.value}})}
              label="Job Or Internship" variant="standard" />

            <TextField fullWidth value={resumedata?.professionalDetails?.company}
              onChange={(e)=>setresumedata({...resumedata, professionalDetails:{...resumedata.professionalDetails, company:e.target.value}})}
              label="Company Name" variant="standard" />

            <TextField fullWidth value={resumedata?.professionalDetails?.location}
              onChange={(e)=>setresumedata({...resumedata, professionalDetails:{...resumedata.professionalDetails, location:e.target.value}})}
              label="Location" variant="standard" />

            <TextField fullWidth value={resumedata?.professionalDetails?.duration}
              onChange={(e)=>setresumedata({...resumedata, professionalDetails:{...resumedata.professionalDetails, duration:e.target.value}})}
              label="Duration" variant="standard" />

           <h3>Skills</h3>
              <TextField fullWidth value={InputSkill}
                onChange={(e)=>setInputSkill(e.target.value)}
                label="Add Skills" variant="standard" />

              <Button onClick={() => addskill(InputSkill)}>Add</Button>

              <h3>Added Skills :</h3>
              {resumedata.skills.length > 0
                ? resumedata.skills.map((item, index) => (
                    <Stack key={index} direction="row" justifyContent="center">
                      <Button variant="contained">{item}</Button>
                    </Stack>
                  ))
                : <Typography>No skills added</Typography>
              }

              <h3>Professional Summary</h3>
              <TextField
                fullWidth
                multiline
                rows={4}
                value={resumedata.summary}
                onChange={(e)=>setresumedata({...resumedata,summary:e.target.value})}
                label="Professional Summary"
                variant="standard"
              />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              
            </Typography>
            <Button variant="contained" onClick={handleUpdate}>Update</Button>
          </Box>

        </Modal>
      </div>
    </>
  )
}

export default Edit