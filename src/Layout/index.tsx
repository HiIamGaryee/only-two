import { ReactNode, useState } from "react";
import { Box, Dialog, Paper } from "@mui/material";
import Sidebar from "../components/sidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// import Navbar from "../components/navbar";
import AiBot from "../components/AiBot";
import botImg from "../assets/go-green/bot-ai-img.jpg";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        backgroundColor: "light.main",
        display: "flex",
        flexDirection: "column",
        color: "white",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <Navbar />
      <Box sx={{ width: "100%", flexGrow: 1, overflowY: "auto" }}>
        {children}
        <Footer />
      </Box>
      <Paper
        component="img"
        onClick={handleOpen}
        src={botImg}
        sx={{
          position: "fixed",
          cursor: "pointer",
          bottom: 15,
          right: 30,
          zIndex: 1000,
          maxHeight: "80px",
          borderRadius: "20px",
          animation: "bounce 2s infinite",
          "@keyframes bounce": {
            "0%, 100%": {
              transform: "translateY(0)",
            },
            "50%": {
              transform: "translateY(-10px)",
            },
          },
        }}
      />
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <AiBot onClose={handleClose} />
      </Dialog>
    </Box>
  );
};

export default Layout;
