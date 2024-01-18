import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import Header from '../components/header/header'

export const Form = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, e.g., send it to a server
    console.log('Form data submitted:', formData);
  };

  return (
    <Container>
        <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Typography variant="h4" gutterBottom>
        My Form
      </Typography>
      <div dis>
      <form onSubmit={handleSubmit}>

        <Grid container spacing={4}>


        <Grid item xs={3}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          sx={{ borderRadius: '100px' }}
        />
       </Grid>

         
          <Grid item xs={3}
          
          >
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={3}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Grid>



          <Grid item xs={3}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Grid>



          <Grid item xs={3}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={3}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={3}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={3}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Grid>

          
        </Grid>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      </div>
    </Container>
  );
};

