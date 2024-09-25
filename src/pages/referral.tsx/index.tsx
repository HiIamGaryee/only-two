import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
  InputAdornment,
  LinearProgress,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import Layout from "../../Layout";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import { ReactComponent as ReferralGiftIcon } from "../../assets/icons/cute/gift-svgrepo-com.svg";
import { ReactComponent as ReferralCuponsIcon } from "../../assets/icons/cute/coupons-svgrepo-com.svg";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ReactComponent as ReferralCardIcon } from "../../assets/icons/cute/card-holder-svgrepo-com.svg";
// import { ReactComponent as ReferralCardIcon } from "../../assets/icons/icon-world-cube.svg";

const referralSwagList = [
  {
    img: <ReferralGiftIcon />,
    title: "Cool Swag",
    now: 0,
    completed: 5,
    progress: "SHARES: 0/5",
    alt: "Cool swag",
  },
  {
    img: <ReferralCuponsIcon />,
    title: "$10 Credit",
    now: 2,
    completed: 3,
    progress: "SIGNED UP: 2/3",
    alt: "Pipedrive credit",
  },
  {
    img: <ReferralCardIcon />,
    title: "$100 Gift Card",
    now: 0,
    completed: 1,
    progress: "SUBSCRIBED: 0/1",
    alt: "Gift card",
  },
];
const referralStepList = [
  {
    title: "1. Share your link",
    description:
      "Collect swag for sharing the invite link five times via this page.",
  },
  {
    title: "2. Friends Sign Up",
    description:
      "Earn $10 of account credit as a paying customer for every three friends who start a free trial.",
  },
  {
    title: "3. Friend Subscribes",
    description: "Get a $100 gift card when your friends subscribe.",
  },
];

const ReferralPage = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "light.main",
          color: "white",
          p: 4,
          minHeight: "100vh",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3" fontWeight="bold">
            Referral Program
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Every customer can take part in our affiliate program. For every
            paying customer you refer with your unique code, you'll get a 25%
            lifetime commission on their payments to us, and they'll get a $10
            discount on their first invoice.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
            Your Referrals
          </Typography>
          <Grid container spacing={4}>
            {referralSwagList.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardContent sx={{ textAlign: "center" }}>
                    {item.img}
                    <Typography variant="h6" fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {item.progress}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={(item.now / item.completed) * 100}
                      sx={{ marginY: 2, h: 10, borderRadius: 5 }}
                    />
                    <Button
                      variant="contained"
                      disabled
                      startIcon={<HttpsRoundedIcon />}
                    >
                      Claim reward
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={4} mt={4}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    h: 1,
                  }}
                >
                  <Box>
                    <Typography variant="h5" fontWeight="bold">
                      Referrals Overview
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      0 SHARES
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="body2">0 SIGNED UP</Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="body2">0 SUBSCRIBED</Typography>
                  </Box>
                  <Button variant="contained" sx={{ mt: 3 }}>
                    View details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent
                  sx={{
                    h: 1,
                  }}
                >
                  <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                    Activity Updates
                  </Typography>

                  <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="inherit"
                    sx={{ mb: 2 }}
                  >
                    <Tab label="Pending" />
                    <Tab label="Joined" />
                  </Tabs>

                  <Box>
                    {tabValue === 0 && (
                      <Typography variant="body2">
                        You have no pending invites - spread the word using your
                        unique invitation link.
                      </Typography>
                    )}
                    {tabValue === 1 && (
                      <Typography variant="body2">
                        You have no joined invites yet - encourage your friends
                        to join!
                      </Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
            Your Referral Stats
          </Typography>

          <Card>
            <CardContent>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Who’s a great addition to the community? Invite them to learn
                and earn karma to unlock new benefits (i.e. courses).
              </Typography>

              {/* Email Input and Invite Button */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 4,
                  flexWrap: "wrap",
                }}
              >
                <TextField
                  placeholder="Enter email addresses"
                  variant="outlined"
                  fullWidth
                  sx={{
                    backgroundColor: "#333",
                    color: "white",
                    flex: 2,
                    marginRight: 2,
                    borderRadius: 2,
                    mb: { xs: 2, md: 0 },
                    input: { color: "white" },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    p: "10px 20px",
                    flex: 1,
                    maxWidth: "200px",
                  }}
                >
                  Send invites
                </Button>
              </Box>

              {/* Share Invitation Link */}
              <Typography variant="body1" sx={{ mb: 2 }}>
                Share unique invitation link
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 4,
                  flexWrap: "wrap",
                  backgroundColor: "#333",
                  borderRadius: 2,
                  p: 1,
                }}
              >
                <TextField
                  fullWidth
                  variant="outlined"
                  value="https://adplist.org/invite/123116"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton sx={{ color: "white" }}>
                          <ContentCopyIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                    sx: { color: "white" },
                  }}
                  sx={{
                    backgroundColor: "transparent",
                    color: "white",
                    flex: 3,
                    borderRadius: 2,
                    input: { color: "white" },
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#0077b5",
                      minWidth: 48,
                      minHeight: 48,
                    }}
                  >
                    <LinkedInIcon />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#1DA1F2",
                      minWidth: 48,
                      minHeight: 48,
                    }}
                  >
                    <TwitterIcon />
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
            How it Works
          </Typography>
          <Grid container spacing={4}>
            {referralStepList.map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ h: 1 }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h6" fontWeight="bold">
                      {step.title}
                    </Typography>
                    <Typography variant="body2">{step.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default ReferralPage;
