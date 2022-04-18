import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import Divider from '@mui/material/Divider';
import {HtmlSvg,JsSvg,CssSvg,GoSvg,PythonSvg,BsSvg,SassSvg,ReactSvg} from '../../../assets/svg/SvgIcons'


export default function SkillList() {
  return (
    <List
      sx={{
        // width: '100%',
        
        minWidth: 500,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem >
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'secondary.main'}}>
            <ReactSvg />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="REACT" secondary="Hooks, Styled Components, Material UI, Custom Hooks..." />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <JsSvg />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="JavaScript" secondary="DOM, Events, Loop Methods, Promises, Clean Code..." />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HtmlSvg />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="HTML5" secondary="Semantic Markup, Forms, Tables, Web Storages..." />
      </ListItem>
    </List>
  );
}
