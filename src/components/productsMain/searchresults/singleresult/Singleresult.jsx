import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EditIcon from "@mui/icons-material/Edit";
import { grey } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
function Singleresult(props) {
  const product = props.product
  return (
    <React.Fragment>
      <Grid container mt={5} mb={2} sx={{ marginLeft: 10, marginRight: 10 }}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "flex-start",
          }}
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
        >
          {" "}
          <Typography
            variant="BODY2"
            sx={{ textAlign: "center", color: "#001eb9", width: "fit-content" }}
            component="h4"
          >
            {product.SCU}
          </Typography>
          <Typography
            variant="BODY2"
            sx={{ textAlign: "center", color: "#969191", width: "fit-content" }}
            component="h4"
          >
            {product.ProductName}
          </Typography>
          <Typography
            variant="BODY2"
            sx={{ textAlign: "center", color: "#f7f7f7", width: "fit-content" }}
            component="h4"
          >
            {product.Desc}
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          item
          xs={2}
          sm={2}
          md={2}
          lg={2}
        ></Grid>

        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          item
          xs={1}
          sm={1}
          md={1}
          lg={1}
        >
          <IconButton variant="outlined">
            <ArrowForwardIosIcon sx={{ color: "#001EB9" }} />
          </IconButton>
        </Grid>
      </Grid>
      <Divider sx={{ marginLeft: 10, marginRight: 10 }} />
    </React.Fragment>
  );
}

export default Singleresult;
