import {
  Avatar,
  Backdrop,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { grey } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import ErrorIcon from "@mui/icons-material/Error";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import axios from "axios";
import { EditContext } from "../../../../context/Context";
import { redirect, useNavigate } from "react-router-dom";
function Singleproduct(props) {
  const product = props.product;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(process.env.REACT_APP_PUBLIC_FOLDER);
  const [dropopen, setDropOpen] = useState(false);
  const { isFetching, dispatch } = useContext(EditContext);
  const navigate = useNavigate();
  const deleteItem = async (itemid) => {
    const data = {
      id: itemid,
    };
    const res = await axios.delete("/product", data);
    if (res.status == 200) {
    } else {
    }
  };
  const deleteAlert = () => {
    setDropOpen(true);
  };
  const editproduct = () => {
    console.log("x")
    dispatch({ type: "EDIT_SUCCESS", payload: props.product });
    navigate("/editproduct");
  }
  return (
    <React.Fragment>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={dropopen}
        onClick={() => {
          setDropOpen(false);
        }}
      >
        <Dialog
          open={dropopen}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <ErrorIcon />
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure ?
            </DialogContentText>
            <Typography variant="body5">
              You wil not be able to undo this action if you proceed?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                deleteItem(product._id);
                setDropOpen(!dropopen);
              }}
            >
              Yes
            </Button>
            <Button
              onClick={() => {
                setDropOpen(!dropopen);
              }}
              autoFocus
            >
              No
            </Button>
          </DialogActions>
        </Dialog>
      </Backdrop>

      <Grid container mt={5} mb={2} sx={{ marginLeft: 5, marginRight: 10 }}>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          item
          xs={5}
          sm={5}
          md={2}
          lg={2}
        >
          {" "}
          <Typography
            variant="BODY2"
            sx={{ textAlign: "center", color: "#969191" }}
            component="h4"
          >
            {product.SCU}
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
        >
          <img crossorigin="anonymous"  className="postImg" src={`http://localhost:8800/images/${product.Image[0]}`} alt="" />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          item
          xs={3}
          sm={3}
          md={3}
          lg={3}
        >
          <Typography
            variant="BODY2"
            sx={{ textAlign: "center", color: "#162427" }}
            component="h4"
          >
            {product.ProductName}
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
        >
          <Typography
            variant="BODY2"
            sx={{ textAlign: "center", color: "#162427S" }}
            component="h4"
          >
            ${product.Price}.00
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          item
          xs={3}
          sm={3}
          md={3}
          lg={3}
        >
          <IconButton onClick={deleteAlert} variant="outlined">
            <DeleteIcon sx={{ color: "#001EB9" }} />
          </IconButton>
          <IconButton variant="outlined" onClick={editproduct}>
            <EditIcon sx={{ color: "#001EB9" }} />
          </IconButton>
          {product.IsFavourite == true ? (
            <>
              <IconButton variant="outlined">
                <StarIcon sx={{ color: "#001EB9" }} />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton variant="outlined">
                <StarOutlineIcon sx={{ color: "#001EB9" }} />
              </IconButton>
            </>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Singleproduct;
