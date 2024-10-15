import React, { useState } from "react";
import { Typography, Container, Grid, Card, CardContent, CardActions, Button, Box, Dialog, DialogContent, DialogTitle, IconButton, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Layout from "../Layout";
import Image1 from '../eco images/bulp.jpg';
import Image2 from '../eco images/GB.webp';
import Image3 from '../eco images/SOlar.webp';
import Image4 from '../eco images/TB.jpg';
import Image5 from '../eco images/wrap.jpg';

const RewardsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currency, setCurrency] = useState<string>("points"); 
  const [open, setOpen] = useState(false);  
  const [selectedReward, setSelectedReward] = useState<any>(null);  
  const [quantity, setQuantity] = useState<number>(1);  
  const conversionRate = 3.5;

  const rewards = [
    { id: 1, category: "Recyclable Materials", name: "Reusable Grocery Bags (Pack of 10)", points: 10000, discount: "-5%", image: Image2, description: "High quality reusable grocery bags made from eco-friendly materials." },
    { id: 2, category: "Energy Saving", name: "Solar-powered Phone Charger", points: 35000, discount: "-10%", image: Image3, description: "Eco-friendly solar-powered charger for your phone." },
    { id: 3, category: "Personal Care", name: "Bamboo Toothbrush Set (Pack of 4)", points: 5500, discount: "", image: Image4, description: "Sustainable bamboo toothbrush set with soft bristles." },
    { id: 4, category: "Energy Saving", name: "Energy-Efficient LED Bulbs (Pack of 6)", points: 20000, discount: "-15%", image: Image1, description: "Energy-efficient LED bulbs that save power and last longer." },
    { id: 5, category: "Sustainable Living", name: "Compostable Food Wraps (Set of 3)", points: 15000, discount: "-8%", image: Image5, description: "Compostable food wraps, a great alternative to plastic." },
  ];

  const filteredRewards = selectedCategory === "All"
    ? rewards
    : rewards.filter(item => item.category === selectedCategory);

  const convertToMYR = (points: number) => Math.floor(points / conversionRate);

 
  const handleRedeem = (reward: any) => {
    setSelectedReward(reward);
    setOpen(true);  
  };

  // Handle Modal Close
  const handleClose = () => {
    setOpen(false);
    setSelectedReward(null);  
  };

  // Handle quantity change
  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));  
  };

  return (
    <Layout>
      <Typography variant="h2" align="center" fontWeight="bold" sx={{ my: 2 }}>
        Rewards Page
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 2, 
          position: 'relative',
          width: '200px',
          height: '50px',
          borderRadius: '25px',
          backgroundColor: '#a7d8a0', 
          margin: 'auto',
        }}
      >

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: currency === "points" ? 0 : '50%',
            width: '50%',
            height: '100%',
            backgroundColor: '#4caf50',
            borderRadius: '25px',
            transition: 'left 0.3s ease',
          }}
        ></Box>

    
        <Button
          onClick={() => setCurrency("points")}
          sx={{
            width: '50%',
            zIndex: 2, 
            color: currency === "points" ? '#fff' : '#000',
            fontWeight: currency === "points" ? 'bold' : 'normal',
            backgroundColor: 'transparent',
            "&:hover": {
              backgroundColor: 'transparent', 
            }
          }}
        >
          Points
        </Button>


        <Button
          onClick={() => setCurrency("MYR")}
          sx={{
            width: '50%',
            zIndex: 2,
            color: currency === "MYR" ? '#fff' : '#000',
            fontWeight: currency === "MYR" ? 'bold' : 'normal',
            backgroundColor: 'transparent',
            "&:hover": {
              backgroundColor: 'transparent',
            }
          }}
        >
          MYR
        </Button>
      </Box>

    
      <Box sx={{ mt: 4 }} /> 


      <Container>
        <Grid container spacing={2} justifyContent="center" sx={{ mb: 3 }}>
          {["All", "Recyclable Materials", "Energy Saving", "Personal Care", "Sustainable Living"].map(category => (
            <Grid item key={category}>
              <Button
                variant="contained"
                color="success"
                sx={{
                  backgroundColor: '#6c9b6f', 
                  color: '#fff',
                  "&:hover": {
                    backgroundColor: '#4caf50', 
                  }
                }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Rewards List */}
      <Container>
        <Grid container spacing={3}>
          {filteredRewards.map((reward) => (
            <Grid item xs={12} sm={6} md={4} key={reward.id}>
              <Card
                sx={{
                  backgroundColor: '#f1f8f4', 
                  borderRadius: '15px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
                }}
              >
                <CardContent>
  
                  <Box
                    component="img"
                    src={reward.image}
                    alt={reward.name}
                    sx={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }}
                  />
                  <Typography variant="h5" sx={{ color: '#2d6a4f', mt: 2 }}>{reward.name}</Typography>

 
                  <Typography sx={{ color: '#1b4332' }}>
                    {currency === "points" 
                      ? `${reward.points} points`
                      : `MYR ${convertToMYR(reward.points)}`}
                  </Typography>

    
                  {reward.discount && (
                    <Typography variant="body2" color="textSecondary">
                      {reward.discount}
                    </Typography>
                  )}
                </CardContent>


                <CardActions>
                  <Button 
                    size="small" 
                    variant="outlined" 
                    sx={{
                      color: '#1b4332', 
                      borderColor: '#4caf50',
                      "&:hover": {
                        backgroundColor: '#6c9b6f', 
                        color: '#fff',
                      }
                    }}
                    onClick={() => handleRedeem(reward)}  
                  >
                    Redeem
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>


      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        {selectedReward && (
          <>
            <DialogTitle>
              {selectedReward.name}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
            
                <Box flex="1" pr={2}>
                  <Box
                    component="img"
                    src={selectedReward.image}
                    alt={selectedReward.name}
                    sx={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}
                  />
                </Box>

        
                <Box flex="1" pl={2}>
                  <Typography variant="h6" sx={{ color: '#2d6a4f', mb: 2 }}>
                    {selectedReward.description}
                  </Typography>

                  <Typography sx={{ color: '#1b4332', mb: 2 }}>
                    {currency === "points" 
                      ? `${selectedReward.points} points`
                      : `MYR ${convertToMYR(selectedReward.points)}`}
                  </Typography>

      
                  <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                    <Button onClick={() => handleQuantityChange(-1)}>-</Button>
                    <TextField
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
                      inputProps={{ min: 1, style: { textAlign: 'center' } }}
                      sx={{ width: '50px', mx: 2 }}
                    />
                    <Button onClick={() => handleQuantityChange(1)}>+</Button>
                  </Box>

     
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: '#4caf50',
                      color: '#fff',
                      mt: 2,
                      "&:hover": {
                        backgroundColor: '#388e3c',
                      }
                    }}
                    onClick={handleClose} 
                  >
                    Confirm Redemption
                  </Button>
                </Box>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Layout>
  );
};

export default RewardsPage;
