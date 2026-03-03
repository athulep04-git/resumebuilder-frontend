import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import FormSteps from "./FormSteps";
import Preview from "./Preview";

function Form() {
  const [StateData,setStateData]=useState(false)
  const[formData,setFormData]=useState({
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

   

  return (
    <div>
      {StateData?
      <div
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <div>
          <Preview formData={formData} />
        </div>
      </div>
      :
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <div>
          <FormSteps formData={formData} setFormData={setFormData} StateData={StateData} setStateData={setStateData}/>
        </div>
        <div>
          <Preview formData={formData} StateData={StateData} />
        </div>
      </Stack>
}
    </div>
  );
}

export default Form;
