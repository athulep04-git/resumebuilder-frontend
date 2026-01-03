import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import { addResumeAPI } from "../services/allAPIs";
import Swal from 'sweetalert2'

const steps = [
  "Basic Information",
  "Contact Details",
  "Education Details",
  "Work Experience",
  "Skills",
  "Review",
];
function FormSteps({formData,setFormData,setStateData}) {

  const { personalDetails, contactDetails, education, professionalDetails, skills, Summary } = formData

  //to hold skills from userside
  const [InputSkill,setInputSkill]=useState('')
  console.log(InputSkill);

  const suggestions=['React','Angular','NodeJS','Express','mongodb']
  
  
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <h3>Personal details</h3>
            <Stack direction={{ md: "column" }} spacing={4}>
              <TextField
              onChange={(e)=>setFormData({...formData,personalDetails:{...formData.personalDetails,name:e.target.value}})}
                id="standard-basic"
                label="Full Name"
                variant="standard"
                value={personalDetails.name}
              />
              
              <TextField
               onChange={(e)=>setFormData({...formData,personalDetails:{...formData.personalDetails,title:e.target.value}})}
                id="standard-basic"
                label="Job Title"
                variant="standard"
                value={personalDetails.title}
              />
              <TextField
              onChange={(e)=>setFormData({...formData,personalDetails:{...formData.personalDetails,location:e.target.value}})}
                id="standard-basic"
                label="Location"
                variant="standard"
                value={personalDetails.location}
              />
            </Stack>
          </Box>
        );
      case 1:
        return (
          <Box>
            <h3>Contact details</h3>
            <Stack direction={{ md: "column" }} spacing={4}>
              <TextField
              onChange={(e)=>setFormData({...formData,contactDetails:{...formData.contactDetails,email:e.target.value}})}
               id="standard-basic" 
               label="Email" 
               variant="standard" 
               value={contactDetails.email}
               />
              <TextField
              onChange={(e)=>setFormData({...formData,contactDetails:{...formData.contactDetails,phonenumber:e.target.value}})}
                id="standard-basic"
                label="Phone Number"
                variant="standard"
                value={contactDetails.phonenumber}
              />
              <TextField
              onChange={(e)=>setFormData({...formData,contactDetails:{...formData.contactDetails,github:e.target.value}})}
                id="standard-basic"
                label="Github Profile Link"
                variant="standard"
                value={contactDetails.github}
              />
              <TextField
              onChange={(e)=>setFormData({...formData,contactDetails:{...formData.contactDetails,linkedIn:e.target.value}})}
                id="standard-basic"
                label="LinkedIn Profile Link"
                variant="standard"
                value={contactDetails.linkedIn}
              />
              <TextField
              onChange={(e)=>setFormData({...formData,contactDetails:{...formData.contactDetails,portfolio:e.target.value}})}
                id="standard-basic"
                label="Portfolio Link"
                variant="standard"
                value={contactDetails.portfolio}
              />
            </Stack>
          </Box>
        );
      case 2:
        return (
          <Box>
            <h3>Education details</h3>
            <Stack direction={{ md: "column" }} spacing={4}>
              <TextField
              onChange={(e)=>setFormData({...formData,education:{...formData.education,course:e.target.value}})}
                id="standard-basic"
                label="Course Name"
                variant="standard"
                value={education.course}
              />
              <TextField
              onChange={(e)=>setFormData({...formData,education:{...formData.education,college:e.target.value}})}
                id="standard-basic"
                label="College Name"
                variant="standard"
                value={education.college}
              />
              <TextField
              onChange={(e)=>setFormData({...formData,education:{...formData.education,university:e.target.value}})}
                id="standard-basic"
                label="University"
                variant="standard"
                value={education.university}
              />
              <TextField
              onChange={(e)=>setFormData({...formData,education:{...formData.education,year:e.target.value}})}
                id="standard-basic"
                label="Year of Passout"
                variant="standard"
                value={education.year}
              />
            </Stack>
          </Box>
        );
      case 3:
        return (
          <Box>
            <h3>Professional Details</h3>
            <Stack direction={{ md: "column" }} spacing={4}>
              <TextField
              onChange={(e)=>setFormData({...formData,professionalDetails:{...formData.professionalDetails,jobtitle:e.target.value}})}
                id="standard-basic"
                label="Job or Internship"
                variant="standard"
                value={professionalDetails.jobtitle}
              />
              <TextField
              onChange={(e)=>setFormData({...formData,professionalDetails:{...formData.professionalDetails,company:e.target.value}})}
                id="standard-basic"
                label="Company Name"
                variant="standard"
                value={professionalDetails.company}
              />
              <TextField
              onChange={(e)=>setFormData({...formData,professionalDetails:{...formData.professionalDetails,location:e.target.value}})}
                id="standard-basic"
                label="Location"
                variant="standard"
                value={professionalDetails.location}
              />
              <TextField
              onChange={(e)=>setFormData({...formData,professionalDetails:{...formData.professionalDetails,duration:e.target.value}})}
                id="standard-basic"
                label="Duration"
                variant="standard"
                value={professionalDetails.duration}
              />
            </Stack>
          </Box>
        );
      case 4:
        return (
          <div>
            <Box>
              <h3>Skills</h3>
              <TextField
                onChange={(e)=>setInputSkill(e.target.value)}
                id="standard-basic"
                label="Add skill"
                variant="standard"
              />
              <Button variant="outlined" onClick={()=>addSkill(InputSkill)}>Add</Button>
              <h3 className="my-4">Suggestions</h3>
              <Stack direction="row" justifyContent={"space-evenly"} flexWrap={"wrap"}>
                {
                  suggestions.map(item=>(
                      <Button variant="contained" onClick={()=>addSkill(item)}>{item}</Button>
                  ))
                }
                
              
              </Stack>
              <h3>Added skills</h3>
              <Stack direction="row" justifyContent={"space-evenly"} flexWrap={'wrap'}>
              {
                skills.map(item=>(
                    <Button variant="contained">{item} <span onClick={()=>removeSkill(item)} className='text-danger fs-3 fw-border ms-1 '
                    
                    > x </span></Button>
                ))
              }
                
              </Stack>
            </Box>
          </div>
        );
      case 5:
        return (
          <Box>
            <h3>Professional Summary</h3>
            <Stack>
              <TextField
              onChange={(e)=>setFormData({...formData,summary:e.target.value})}
                id="standard-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Enthusiastic MERN stack developer with a strong foundation in MongoDB,Express.js, React, and Node.js. Completed multiple full-stack projects,including a task management app and portfolio site. Eager to apply problem-solving skills and collaborate with a dynamic team."
                variant="standard"
                
              />
            </Stack>
          </Box>
        );
      default:
        return "Null";
    }
  };

const addSkill=(skill)=>{
  console.log(skill);
  if(skills.includes(skill)){
    alert("Skill already existing...")
  }
  else{
    setFormData(data=>({...data,skills:[...data.skills,skill]}))
  }
  
}
const removeSkill=(skill)=>{
  setFormData(data=>({...data,skills:skills.filter(item=>item!=skill)}))
}

const handleAddResume=async()=>{
  try{
const response=await addResumeAPI(formData)
  console.log(response);
  setStateData(true)
  Swal.fire({
  title: 'Success!',
  text: 'Resume submitted',
  icon: 'success',
  confirmButtonText: 'OK'
})
  }catch(err){
    Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'OK'
})
  }
  
}

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>{renderStepContent(activeStep)}</Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <>
              {activeStep === steps.length - 1 ? 
              (
                <Button onClick={handleAddResume}>Finish</Button>
              )
              :
              (
                <Button onClick={handleNext}>Next</Button>
              )
            }
            </>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default FormSteps;
