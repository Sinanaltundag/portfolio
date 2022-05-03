import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ButtonGroup } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProjectModal({ open, setOpen, data }) {
  return (
    <div>
      <Modal
        onBackdropClick={() => setOpen(false)}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {data.title}
            </Typography>
            <img src={process.env.PUBLIC_URL + `${data.img}`} alt="" />
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <ul>
                {data.details?.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </Typography>
            <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'between',
        
        '& > *': {
          m: 1,
        },
      }}
    >
      
      <ButtonGroup variant="text" aria-label="text button group" fullWidth>
            <Button onClick={() => setOpen(false)}>Close</Button>
            <Button href={data.url} target="_blank">Go to Page</Button>
        
      </ButtonGroup>
    </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
