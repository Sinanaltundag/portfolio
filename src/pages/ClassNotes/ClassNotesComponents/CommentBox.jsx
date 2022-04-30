import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Checkbox, FormControlLabel, IconButton } from "@mui/material";
import { useState } from "react";
import AddCommentIcon from '@mui/icons-material/AddComment';
import { toast } from "react-toastify";
import { useBlog } from "../../../Context/DataContext";

const commentDate = new Date();


export default function CommentBox({ blog, userInfo,activeTopic }) {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [isShowCommentator, setIsShowCommentator] = useState(false);
  const {editBlog} = useBlog()

  const handleClickOpen = () => {
    userInfo&& setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    setComment(e.target.value)
  };
  const handleCheck = (event) => {
    setIsShowCommentator(event.target.checked);
  };
  const handleComment = () => {
    let newComment = {commentDate:commentDate.toDateString(),comment:comment, commentator:userInfo.email, isShowCommentator}

    comment.length>5 ?blog.comments? editBlog({...blog, comments: [...blog.comments, newComment]},activeTopic):editBlog({...blog, comments: [newComment]},activeTopic):toast("Min 5 character")
    setOpen(false);
  };
  let helperText =`10 - 100 character you can write. Remained character: ${100-comment.length}`
  return (
    <div>
      <IconButton size="small" aria-label="like" onClick={handleClickOpen}>
        <AddCommentIcon color="action" sx={{ marginRight: 1 }} />{" "}
        <span color="primary">{blog.comments?.length||0}</span>
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
            multiline
            rows={4}
            id="comment"
            label="Your Comment"
            type="text"
            fullWidth
            variant="standard"
            //! input max character 
            inputProps={{
              maxLength: 100,
            }}
            helperText={helperText}
            onChange={handleChange}
          />
          <FormControlLabel control={
          <Checkbox
      checked={isShowCommentator}
      onChange={handleCheck}
      inputProps={{ 'aria-label': 'controlled' }}
    />}
    label="Is your email shown with your comment?" />
    
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleComment}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
