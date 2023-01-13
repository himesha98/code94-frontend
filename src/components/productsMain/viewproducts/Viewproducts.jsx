import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { grey } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import SearchIcon from "@mui/icons-material/Search";
import Singleproduct from "./singleproduct/Singleproduct";
import { EditContext } from "../../../context/Context";

function Viewproducts(props) {
  const favTrigger = props.favourite;
  const prodlist = props.list;
  const [filteredlist,setFilteredlist] = useState([])
  const { isFetching, dispatch } = useContext(EditContext);


  useEffect(() => {
    if(favTrigger==true){
      prodlist.map((item,index)=>{
        if(item.IsFavourite==false){
          prodlist.splice(index, 1); 
        }
      })
      setFilteredlist(prodlist)
    }else{
      setFilteredlist(prodlist)
    }
    dispatch({ type: "APP_START" });
  }, [props])
  
  return (
    <React.Fragment>
      <Box>
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
              sx={{ textAlign: "center", color: "#001eb9" }}
              component="h4"
            >
              SKU
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
              sx={{ textAlign: "center", color: "#001eb9" }}
              component="h4"
            >
              IMAGE
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
            <Typography
              variant="BODY2"
              sx={{ textAlign: "center", color: "#001eb9" }}
              component="h4"
            >
              PRODUCT NAME
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
              sx={{ textAlign: "center", color: "#001eb9" }}
              component="h4"
            >
              PRICE
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
          ></Grid>
        </Grid>
        {prodlist.length > 0 ? (
          prodlist.map((product) => <Singleproduct product={product} />)
        ) : (
          <></>
        )}
      </Box>
    </React.Fragment>
  );
}

export default Viewproducts;
