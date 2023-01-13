import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { grey } from "@mui/material/colors";
function Header() {
  return (
    <React.Fragment>
      <Box>
        <Grid container mt={2} mb={2}>
          <Grid item xs={6} sm={6} md={8} lg={8}></Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            item
            xs={6}
            sm={6}
            md={4}
            lg={4}
          >
            <Button
              sx={{ color: grey[900] }}
              variant="text"
              endIcon={<ArrowDropDownIcon sx={{ color: grey[900], fontWeight:500 }} />}
            >
              ADMIN{" "}
            </Button>
            <Avatar sx={{ bgcolor: grey[500] }}></Avatar>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default Header;
