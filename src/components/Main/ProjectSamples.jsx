import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { styled, Tooltip, tooltipClasses, Typography } from "@mui/material";
import ProjectModal from "./mainComponents/ProjectModal";

//! responsive component creating
// const RespImageListItem = styled(ImageListItem)(({ theme }) => ({
//   // padding: theme.spacing(2),

//   [theme.breakpoints.down('lg')]: {
//     backgroundColor: red[500],
//     gridColumn: 2,
//   },
//   [theme.breakpoints.up('lg')]: {
//     backgroundColor: blue[500],
//     gridColumn: 4,

//   },

// }));
// styled components for projects
const Styledimg = styled("img")`
  opacity: 0.8;
  transition: all 0.5s;
  &:hover {
    opacity: 1;
  }
`;

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgb(42, 0, 148)",
    color: "white",
    maxWidth: 250,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    borderRadius: "10px",
  },
}));

export default function ProjectSamples({ width1200, projects, title }) {
  const [open, setOpen] = React.useState(false);
  const [projectData, setProjectData] = React.useState([]);
  const handleOpen = (e, item) => {
    setProjectData(item);
    setOpen(true);
  };
  return (
    <ImageList sx={{ marginTop: 0 }}>
      <ProjectModal open={open} setOpen={setOpen} data={projectData} />
      {/* responsive image bars */}
      <ImageListItem key="Subheader" cols={width1200 ? 2 : 4} >
        <ListSubheader
          component="div"
          sx={{ backgroundColor: "primary.dark", color: "white", fontSize: 25,  borderRadius: "10px", display:`${width1200&&"none"}`}}
        >
          {title}
        </ListSubheader>
      </ImageListItem>
      {projects.map((item) => (
        <ImageListItem
          key={item.img}
          sx={{ cursor: "pointer", width: 250, height: 150,  borderRadius: "10px" }}
          onClick={(e) => handleOpen(e, item)}
        >
          <Styledimg
            //! images import from public folder
            src={process.env.PUBLIC_URL + `${item.img}`}
            alt={item.title}
            loading="lazy"
            style={{ borderRadius: "10px"}}
          />

          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography>{item.title}</Typography>
                    <em>{"This project aims: "}</em> <b>{item?.aim}</b> <br />
                    <i>{"Are you interested?"}</i> <br />
                    <Typography variant="caption">
                      {"You can click on image to see details"}{" "}
                    </Typography>
                  </React.Fragment>
                }
              >
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              </HtmlTooltip>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
