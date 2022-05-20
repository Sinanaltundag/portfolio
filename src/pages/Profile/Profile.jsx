import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useBlog } from "../../Context/DataContext";
import { useSession } from "../../Context/SessionContext";
import { useCustomTheme } from "../../Context/ThemeContext";

const Profile = () => {
  const { userInfo } = useSession();
  const { getFavorites, isLoading, favoriteBlogs } = useBlog();

  const navigate = useNavigate();

  useEffect(() => {
    getFavorites();
  }, []);

  const { navbarHeight } = useCustomTheme();
  return (
    <Box
      maxWidth="sm"
      mx={"auto"}
      sx={{
        backgroundColor: "white",
        borderRadius: "1rem",
        boxShadow: "10px 10px 5px 1px black",
        paddingTop: `${navbarHeight}px`,
        
      }}
    >
      <CssBaseline />
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <CircularProgress color="primary" size={100} />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor:"background.paper"
          }}
        >
          <Avatar
            sx={{ m: 1, bgcolor: "primary.dark", height: 250, width: 250 }}
            alt={userInfo.email}
            src={userInfo.photoURL || ""}
          >
          </Avatar>
          <Typography component="h1" variant="h3" width="100%" align="center" color="primary.dark">
            {userInfo?.displayName}
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
         
            <Grid item xs={12}>
              <Typography component="h1" variant="h5" width="100%" align="center">
                Favorites
              </Typography>
              <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="text"
                fullWidth
              >
                {favoriteBlogs.map((fav, i) => (
                  <Button
                    key={i}
                    size="large"
                    onClick={() => navigate(`/details/${fav.topic}/${fav.favid}`)}
                  >
                    {fav.title}
                  </Button>
                ))}
              </ButtonGroup>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Profile;
