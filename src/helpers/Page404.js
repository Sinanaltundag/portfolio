import { Box, Typography } from "@mui/material";
import React from "react";

const Page404 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "text.primary",
        backgroundImage: `url("https://picsum.photos/id/1/1200/900")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div>
        <Typography variant="h2" noWrap paragraph>
          Page Not Found
        </Typography>
      </div>
    </Box>
  );
};

export default Page404;
