import React, { useEffect, useState } from "react";
import { deleteHistoryAPI, getHistoryAPI } from "../services/allAPIs";
import {
  Box,
  Stack,
  Card,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { MdDelete } from "react-icons/md";

function History() {
  const [historyData, setHistoryData] = useState([]);



  const getHistory = async () => {
    try {
      const response = await getHistoryAPI();
      console.log(response);
      setHistoryData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deletehistory= async (id) =>{
    try {
      const response = await deleteHistoryAPI(id);
      console.log(response);
      getHistory()
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getHistory();
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Resume History
      </Typography>

      <Stack direction="row"  alignItems="center" flexWrap="wrap">
        {historyData.length > 0 ? (
          historyData.map((item, index) => (
            <Box key={index}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <p> Downloaded at:{item.formatedDate}</p>
                <MdDelete onClick={()=>deletehistory(item.id)} size={22}/>
              </Stack>

              <Card sx={{ width: 600, height: 700, margin: 2 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="640"
                    image={item.imgData}
                  />
                </CardActionArea>
              </Card>
            </Box>
          ))
        ) : (
          <Typography variant="h6">
            No history available
          </Typography>
        )}
      </Stack>
    </Box>
  );
}

export default History;
