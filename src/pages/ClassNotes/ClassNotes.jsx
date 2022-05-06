import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useBlog } from "../../Context/DataContext";
import { useCustomTheme } from "../../Context/ThemeContext";
import Notes from "./Notes";
import { useEffect, useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function ClassNotes() {
  useEffect(function updateTitle() {
    document.title = "Class Notes";
  });
  const theme = useTheme();
  const { navbarHeight } = useCustomTheme();
  const [value, setValue] = useState(0);
  const { setActiveTopic } = useBlog();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        setActiveTopic("react");
        break;
      case 1:
        setActiveTopic("javascript");
        break;
      case 2:
        setActiveTopic("styling");
        break;

      default:
        break;
    }
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "100%",
        paddingTop: `${navbarHeight}px`,
      }}
    >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered
        >
          <Tab label="React" {...a11yProps(0)} />
          <Tab label="Javascript" {...a11yProps(1)} />
          <Tab label="Styling" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Notes />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Notes />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Notes />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
