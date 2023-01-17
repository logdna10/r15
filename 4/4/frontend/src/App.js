import './App.css';
import { Button, createTheme, Dialog, DialogActions, DialogContent, DialogTitle, Grid, OutlinedInput, Table, TableBody, TableCell, TableHead, TableRow, ThemeProvider, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#148cbb"
      },
      secondary: {
        main: "#ffffff"
      },
      info: {
        main: "#444444"
      }
    }
  });

  const [emps, setEmps] = useState([]);
  const [edit, setEdit] = useState(false);
  const [create, setCreate] = useState(false);
  const [emp, setEmp] = useState(null);

  //for create
  const [ssn, setSSN] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8080/emps")
    .then((res) => {
      setEmps(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  const handleCreate = () => {
    setEmp(null);
    setCreate(true);
  }

  const createCloseHandler = () => {
    setCreate(false);
  }

  const handleEdit = (e) => {
    setEmp(e);
    setEdit(true);
  }

  const handleDelete = (ssn) => {
    axios.delete("http://localhost:8080/emp/"+ssn)
    .then((res) => {
      setEmps(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const editCloseHandler = () => {
    setEdit(false);
  }

  const handleEditSubmit = () => {
    axios.put("http://localhost:8080/emp", emp)
    .then((res) => {
      axios.get("http://localhost:8080/emps")
      .then((res) => {
        setEmps(res.data);
        editCloseHandler();
      })
      .catch((err) => {
        console.log(err);
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  const handleCreateSubmit = () => {
    console.log(emp);
    axios.post("http://localhost:8080/emp", {
      ssn: ssn,
      firstname: firstName,
      lastname: lastName,
      contact: contact
    })
    .then((res) => {
      axios.get("http://localhost:8080/emps")
      .then((res) => {
        setEmps(res.data);
        createCloseHandler();
      })
      .catch((err) => {
        console.log(err);
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid container>
          <Grid item alignItems="center" className='width'>
            <Typography variant="h4" style={{margin: "1em", fontWeight: "bold"}} color="primary">EMPLOYEE MANAGEMENT SYSTEM</Typography>
          </Grid>
          <Grid item className='width' alignItems="center">
            <Button variant='outlined' color='primary' style={{backgroundColor: "white"}} onClick={handleCreate}>CREATE</Button>
          </Grid>
          <Grid item className='width' style={{padding: "3em"}} alignItems="center">
            <Table style={{backgroundColor: "white", borderRadius: "8 px"}}>
              <TableHead>
                <TableRow>
                  <TableCell style={{fontWeight: "bold"}}>SSN</TableCell>
                  <TableCell style={{fontWeight: "bold"}}>First Name</TableCell>
                  <TableCell style={{fontWeight: "bold"}}>Last Name</TableCell>
                  <TableCell style={{fontWeight: "bold"}}>Contact</TableCell>
                  <TableCell style={{fontWeight: "bold"}}>Edit</TableCell>
                  <TableCell style={{fontWeight: "bold"}}>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  emps.map((e) => (
                    <TableRow>
                      <TableCell>{e.ssn}</TableCell>
                      <TableCell>{e.firstname}</TableCell>
                      <TableCell>{e.lastname}</TableCell>
                      <TableCell>{e.contact}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleEdit(e)}
                        >
                          EDIT
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button variant="contained" color="error" onClick={() => handleDelete(e.ssn)}>
                          DELETE
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </Grid>
        </Grid>
        <Dialog
          open={edit}
          onClose={editCloseHandler}
        >
          <DialogTitle>Edit Employee</DialogTitle>
          <DialogContent style={{width: "300px"}}>
            {
              (emp !== null)?
              <Grid container spacing="10px">
                  <Grid item xs="12">
                    <OutlinedInput fullWidth type="text" placeholder="SSN" value={emp.ssn} onChange={(e) => {
                      setEmp({
                        ssn: e.target.value,
                        firstname: emp.firstname,
                        lastname: emp.lastname,
                        contact: emp.contact
                      });
                    }}></OutlinedInput>
                  </Grid>
                  <Grid item xs="12">
                    <OutlinedInput fullWidth type="text" placeholder="First Name" value={emp.firstname} onChange={(e) => {
                      setEmp({
                        ssn: emp.ssn,
                        firstname: e.target.value,
                        lastname: emp.lastname,
                        contact: emp.contact
                      });
                    }}></OutlinedInput>
                  </Grid>
                  <Grid item xs="12">
                    <OutlinedInput fullWidth type="text" placeholder="Last Name" value={emp.lastname} onChange={(e) => {
                      setEmp({
                        ssn: emp.ssn,
                        firstname: emp.firstname,
                        lastname: e.target.value,
                        contact: emp.contact
                      });
                    }}></OutlinedInput>
                  </Grid>
                  <Grid item xs="12">
                    <OutlinedInput fullWidth type="number" placeholder="contact" value={emp.contact} onChange={(e) => {
                      setEmp({
                        ssn: emp.ssn,
                        firstname: emp.firstname,
                        lastname: emp.lastname,
                        contact: e.target.value
                      });
                    }}></OutlinedInput>
                  </Grid>
              </Grid>
              :
              <></>
            }
          </DialogContent>
          <DialogActions style={{paddingRight: "1.6em", marginBottom: "1em"}}>
            <Button variant='contained' color='primary' onClick={handleEditSubmit}>EDIT</Button>
            <Button variant='outlined' color='info' onClick={editCloseHandler}>CANCEL</Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={create}
          onClose={createCloseHandler}
        >
          <DialogTitle>Add Employee</DialogTitle>
          <DialogContent style={{width: "300px"}}>
            <Grid container spacing="10px">
                <Grid item xs="12">
                  <OutlinedInput fullWidth type="text" placeholder="SSN" onChange={(e) => {
                    setSSN(e.target.value);
                  }}></OutlinedInput>
                </Grid>
                <Grid item xs="12">
                  <OutlinedInput fullWidth type="text" placeholder="First Name" onChange={(e) => {
                    setFirstName(e.target.value);
                  }}></OutlinedInput>
                </Grid>
                <Grid item xs="12">
                  <OutlinedInput fullWidth type="text" placeholder="Last Name" onChange={(e) => {
                    setLastName(e.target.value);
                  }}></OutlinedInput>
                </Grid>
                <Grid item xs="12">
                  <OutlinedInput fullWidth type="number" placeholder="contact" onChange={(e) => {
                    setContact(e.target.value);
                  }}></OutlinedInput>
                </Grid>
            </Grid>
          </DialogContent>
          <DialogActions style={{paddingRight: "1.6em", marginBottom: "1em"}}>
            <Button variant='contained' color='primary' onClick={handleCreateSubmit}>ADD</Button>
            <Button variant='outlined' color='info' onClick={createCloseHandler}>CANCEL</Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}

export default App;
