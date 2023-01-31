import { Helmet } from 'react-helmet-async';

import { useState } from 'react';
// @mui
import { Card, TextField, Box, Button, Container } from '@mui/material';

// ----------------------------------------------------------------------

export default function Enquiry() {
  const [image, setImage] = useState();

  const handleImageFile = (event) => {
    setImage(event.target.files[0]);
};
  return (
    <>
      <Helmet>
        <title> Enquiry | Minimal UI </title>
      </Helmet>

      <Container>
        <Card sx={{ width: '100%', padding: '24px' }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="orderId" label="OrderId" type="number" fullWidth mt={4} sx={{ mr: { sm: 1 } }} />
            <TextField name="id" label="Id" type="number" fullWidth sx={{ mr: { sm: 1 } }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="name" label="Name" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
            <TextField name="address" label="Address" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
          <TextField name="pincode" label="Pincode" type="number" fullWidth sx={{ mr: { sm: 1 } }} />
            <TextField name="locationCode" label="Location Code" type="number" fullWidth sx={{ mr: { sm: 1 } }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="cCordinator" label="Customer Cordinator" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
            <TextField name="mNumber" label="Material Number" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="sCordinator" label="Site Cordinator" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
            <TextField name="mNumber" label="Material Number" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <TextField name="fCordinator" label="Factory Cordinator" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
            <TextField name="mNumber" label="Material Number" type="text" fullWidth sx={{ mr: { sm: 1 } }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
            <Box sx={{ width: '100%', ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }} mr={1} >
              <Button
                // variant="outlined"
                
                fullWidth
                component="label"
                style={{ height: '56px',border:"1px solid #dcdcdc", color:"gray", fontSize:"1rem" }}
                value={image}
                onChange={(e) => handleImageFile(e)}
              >
                Attachment
                <input hidden accept="image/*" type="file" />
              </Button>
            </Box>
            <Box sx={{ width: '100%', ml: { xs: 0, sm: 1 } }} />
          </Box>
            <Box>
            <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
        </Card>
      </Container>
    </>
  );
}
