import  { useState } from "react";
import { Box, Button, TextField, Typography, Modal } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DynamicTable } from "../components/index";
import { donationsData } from "../data/donationsData";

const Donations = () => {
  const [donations, setDonations] = useState([...donationsData]);
  const [open, setOpen] = useState(false);
  const [newDonation, setNewDonation] = useState({
    donorName: "",
    amount: "",
    date: "",
    paymentMethod: "",
  });

  const sampleColumns = Object.keys(donationsData[0] || {}).filter(
    (key) => key !== "id"
  );

  const handleOpen = () => {
    setNewDonation({ donorName: "", amount: "", date: "", paymentMethod: "" });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (e, key) => {
    setNewDonation((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleAddDonation = () => {

    if (!newDonation.donorName || !newDonation.amount) {
      toast.error("Please enter donor name and amount");
      return;
    }

    setDonations((prevDonations) => [
      {
        ...newDonation,
        id: prevDonations.length + 1,
        amount: Number(newDonation.amount),
      },
      ...prevDonations,
    ]);
console.log(donations, "Donations")
    toast.success("Donation added successfully!");
    handleClose();
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Donations
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{ mb: 2 }}
      >
        Add Donation
      </Button>
      <DynamicTable columns={["id", ...sampleColumns]} data={donations} />

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Add Donation
          </Typography>
          {sampleColumns.map((key) => (
            <TextField
              key={key}
              fullWidth
              label={key.replace(/([A-Z])/g, " $1").trim()}
              variant="outlined"
              value={newDonation[key] || ""}
              onChange={(e) => handleChange(e, key)}
              sx={{ mb: 2 }}
            />
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddDonation}
            fullWidth
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Donations;
