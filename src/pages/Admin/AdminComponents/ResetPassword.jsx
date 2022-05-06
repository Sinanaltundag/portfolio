import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useSession } from "../../../Context/SessionContext";



export default function ResetPassword() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const {resetPassword} = useSession()
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEmail("")
  };
  const handleChange = (e) => {
    setEmail(e.target.value)
  };
  const handleReset = () => {
    resetPassword(email)
    handleClose()
  };
  
  return (
    <div>
      <IconButton size="small" aria-label="like" onClick={handleClickOpen}>
        Forget password?
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Write a Comment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can send what you want about subject...
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={email}
          />
    
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleReset}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
