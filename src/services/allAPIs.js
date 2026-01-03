import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";


//add resume API call- POST(reqBody)

export const addResumeAPI= async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/resumes`,reqBody)
}

//add resume history API call- POST(reqBody)
export const addHistoryAPI= async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/history`,reqBody)
}

//get resume history API call- POST(reqBody)
export const getHistoryAPI= async()=>{
    return await commonAPI('GET',`${serverURL}/history`,{})
}

//delete resume history API call- delete(id)
export const deleteHistoryAPI= async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}
//get resume by id API call- POST(reqBody)
export const getAResumeAPI= async(id)=>{
    return await commonAPI('GET',`${serverURL}/history/${id}`,{})
}


export const updateAResumeAPI = async (id, reqBody) => {
  return await commonAPI('PUT', `${serverURL}/history/${id}`, reqBody);
};
