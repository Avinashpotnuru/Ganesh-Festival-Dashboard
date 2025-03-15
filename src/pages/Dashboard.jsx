import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Ganesh Festival Dashboard
      </Typography>
      <Grid container spacing={3}>
        {Array.from({ length: 20 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">Total Donations</Typography>
                <Typography variant="h4">₹50,000</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Dashboard;
