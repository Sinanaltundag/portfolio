import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import CommentIcon from '@mui/icons-material/Comment';

export default function Comments({comments}) {
  
  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
      }}
    >

     {comments.map((item,i) => (
         <div key={i}> <ListItem>
         
        <ListItemAvatar>
          <Avatar>
            <CommentIcon />
          </Avatar>
        </ListItemAvatar>
        
        <ListItemText primary={item.comment} secondary={item.commentDate} />
        {item.isShowCommentator&&item.commentator}
      </ListItem>
      <Divider variant="inset" component="li" /></div>)) }
   
    </List>
  );
}
