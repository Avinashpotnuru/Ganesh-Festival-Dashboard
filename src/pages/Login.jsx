import { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "potnuruavinash111@gmail.com" && password === "8919016096") {
      toast.success("Login successful! Redirecting...");
      setTimeout(() => navigate("/"), 1000);
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Paper elevation={3} sx={{ padding: 4, width: 350 }}>
        <Typography variant="h5" textAlign="center" mb={2}>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
        <Typography textAlign="center" mt={2}>
          <a href="#">Forgot Password?</a>
        </Typography>
      </Paper>
    </Box>
  );
};


export default Login;
