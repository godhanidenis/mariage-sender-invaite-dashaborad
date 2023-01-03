import React, { useEffect } from 'react'
import { Button, FormControl, Grid, MenuItem, Modal, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form';
import { Box, Container } from '@mui/system'
import { addPeopleslistStart,  editPeoplelistStart,  loadPeoplelistStart } from '../redux/ducts/Peoplelist';
import { useDispatch, useSelector } from "react-redux";
import PeopleLists from "../Table/PeopleTable.js"
const style = {
  zIndex: "1200",
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 240,
  p: 4,
};
const currencies = [
  {
    id: 1,
    label: 'garba',
  },
  {
    id: 2,
    label: 'haldi',
  },
  {
    id: 3,
    label: 'reception',
  },
  {
    id: 4,
    label: 'direct wedding',
  },
];
const People = () => {
  const {
    register: securityFormRegister,
    handleSubmit: securityFormHandleSubmit,
    formState: { errors: securityFormErrors },
    reset
  } = useForm();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const  {peopleList}  = useSelector((state) => state.peopleList);
  console.log(peopleList)
  useEffect(() => {
    dispatch(loadPeoplelistStart());
  }, [dispatch]);

  const peoplelistubmit = (data) => {
    console.log(data,"dddddddddddddddddddddd")
    dispatch(addPeopleslistStart({
      name : data.name,
      contact:data.mobileno,
      cards: [2,1]
    }))
    // console.log(data,"dddddddddddddddddd")
    // dispatch(editPeoplelistStart({
    //   id: peopleList[0]?.id,
    //   data
    // }
    // ))
    reset() 
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
            fontSize: "18px"
          }}
          variant="contained"
        >
          ADD Peoples
        </Button>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <form onSubmit={securityFormHandleSubmit(peoplelistubmit)}>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                  Add Peoples
                </Typography>
                <TextField fullWidth id="filled-basic" label="Name" variant="filled"
                  {...securityFormRegister("name", {
                    required: 'Name is required'
                  })}
                />
                {securityFormErrors?.name?.message && (
                  <p style={{ color: "red" }}>
                    Name is required.
                  </p>
                )}

                <TextField fullWidth
                  variant="filled" sx={{ mt: "15px" }}
                  label="MobileNumber"
                  id='mobileNumber'
                  name="mobileNumber"
                  {...securityFormRegister('mobileno', {
                    required: 'Mobile number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Invalid mobile number'
                    }
                  })}
                />
                {securityFormErrors?.mobileno?.message && (
                  <p style={{ color: "red" }}>
                    Invalid mobile number
                  </p>
                )}
                <FormControl variant="filled" sx={{ mt: 2, minWidth: 220 }}>
                  <TextField
                    select
                    fullWidth
                    defaultValue=""
                    label="Select"
                    {...securityFormRegister('event', {
                      required: 'Please select event',
                    })}
                  // error={errors.currency}
                  // helperText={errors.currency?.message}
                  >
                    {currencies.map((option, id) => (
                      <MenuItem key={id} value={option}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
                {securityFormErrors?.event?.message && (
                  <p style={{ color: "red" }}>
                    Please select event.
                  </p>
                )}

                {/* <div style={{marginTop:"20px",display:"flex",justifyContent:"space-between"}}>
                <Typography>Attachement File</Typography>
              <input type="file" />
              </div> */}
                <Box mt={2} ml={8} >
                  <Button
                    onClick={handleClose}
                    style={{
                      borderRadius: 35,
                      backgroundColor: "#21b6ae",
                      padding: "10px 30px",
                      fontSize: "18px"
                    }}
                    variant="contained"
                  >
                    Cancel
                  </Button>
                  <Button
                    type='Submit'
                    style={{
                      borderRadius: 35,
                      backgroundColor: "#21b6ae",
                      padding: "10px 30px",
                      fontSize: "18px",
                      marginLeft: "10px"
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
            <PeopleLists peopleList={peopleList} handleOpen={handleOpen} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default People