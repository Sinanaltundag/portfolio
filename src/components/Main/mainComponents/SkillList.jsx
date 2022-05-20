import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";

export default function SkillList({ skillList }) {
  return (
    <List
      sx={{
        minWidth: 500,
        bgcolor: "background.paper",
        borderRadius: "10px"
      }}
    >
      {skillList.map((skill, i) => (
        <Box key={i}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                sx={{
                  bgcolor: "text.primary",
                  padding: "0.5rem",
                  marginRight: "0.5rem",
                }}
                alt={skill.title}
              >
                {skill.svg}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={skill.title}
              secondary={skill.subjects.join(", ")}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Box>
      ))}
    </List>
  );
}
