import React, { useEffect, useState } from "react";
import { Button, Grid, Modal, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Eventtable from "../Table/Cardstable";
import { useDispatch, useSelector } from "react-redux";
import {
  addEventlistStart,
  editEventlistStart,
  loadEventlistStart,
} from "../redux/ducts/Eventlists";
import Cardstable from "../Table/Cardstable";

const style = {
  zIndex: "1200",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 240,
  p: 4,
};

const Event = () => {
  console.log("1111111d");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const { eventList } = useSelector((state) => state.eventList);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(loadEventlistStart());
  }, [dispatch]);
  console.log(selectedFile, "selectedFile")
  const onSubmit = (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setErrorMessage('Please select a file to upload');
      return;
    }

    if (!name) {
      setErrorMessage('Please select a file to upload');
      return;
    }
    const formData = new FormData()
    formData.append('file', selectedFile)
    console.log(formData, "88888888")

    // dispatch(
    //   addEventlistStart({
    //     card_name: name, event_card: selectedFile
    //   })
    // );
    dispatch(editEventlistStart({
      id: eventList[2]?.id,
      card_name: name, event_card: selectedFile
    }
    ))
    setName("")
    setSelectedFile("")
    handleClose()
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box mt={10} ml={50}>
        <Button
          onClick={handleOpen}
          style={{
            borderRadius: 35,
            backgroundColor: "#21b6ae",
            padding: "10px 30px",
            fontSize: "18px",
          }}
          variant="contained"
        >
          ADD Cards
        </Button>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add Cards
              </Typography>
              <form onSubmit={onSubmit}>
                <TextField
                  fullWidth
                  id="filled-basic"
                  label="Name"
                  variant="filled"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <input type="file" id="file" onChange={(event) => setSelectedFile(event.target.files[0])} />
                {/* {errors.name && <span>This field is required</span>} */}
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                <Box mt={2} ml={10}>
                  <Button
                    onClick={handleClose}
                    style={{
                      borderRadius: 35,
                      backgroundColor: "#21b6ae",
                      padding: "8px 20px",
                      fontSize: "18px",
                      marginLeft: "10px",
                    }}
                    variant="contained"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={onSubmit}
                    type="submit"
                    style={{
                      borderRadius: 35,
                      backgroundColor: "#21b6ae",
                      padding: "8px 30px",
                      fontSize: "18px",
                    }}
                    variant="contained"
                  >
                    Add
                  </Button>
                </Box>
              </form>
            </Box>
          </Modal>
        </div>
        <Grid
          container
          mt={5}
          sx={{
            width: "55%",
            justify: "center",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Grid item xs={12}>
            <Cardstable eventList={eventList} handleOpen={handleOpen} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Event;
