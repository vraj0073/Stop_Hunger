import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

export default function CardElement({
  itemName,
  content,
  imageUrl,
  quantity,
  sender,
  itemId,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleAccept = async () => {
    const res = await axios.post("http://localhost:5000/acceptItem", {
      userId: "624b5330607ad4150a82c0d2",
      itemId,
    });
    // console.log(res);
    setOpen(false);
    window.location.reload();
  };

  const handleDecline = () => {
    setOpen(false);
  };
  return (
    <Grid item xs={3} style={{ marginTop: "2%" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {itemName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {quantity}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button size="small" onClick={handleOpen}>
            Accept
          </Button>
        </CardActions>
        <Dialog
          open={open}
          onClose={handleDecline}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Contact Details:"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Restaurant name: {sender.restaurantName}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              Addresss: {sender.address}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              Phone Number: {sender.phoneNumber}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAccept} autoFocus>
              Accept
            </Button>
            <Button onClick={handleDecline} autoFocus>
              Decline
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    </Grid>
  );
}
