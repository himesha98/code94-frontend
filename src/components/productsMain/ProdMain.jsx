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
import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { grey } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import SearchIcon from "@mui/icons-material/Search";
import Viewproducts from "./viewproducts/Viewproducts";
import Searchresults from "./searchresults/Searchresults";
import Addproduct from "./addproduct/Addproduct";
import axios from "axios";
import { Link } from "react-router-dom";

function ProdMain() {
  const [title, setTitle] = useState("PRODUCTS");
  const [favProds, setFavprods] = useState(false);
  const [searching, setSearching] = useState(false);
  const [productlist, setProductlist] = useState([]);
  const [param, setParam] = useState();

  const setFavProds = () => {
    if (favProds) {
      setTitle("PRODUCTS");
      setFavprods(false);
    } else {
      setTitle("FAVOURITE PRODUCTS");
      setFavprods(true);
    }
  };
  const searchProducts = async (e) => {
    e.preventDefault();
    setSearching(true);
    const data = {
      search: true,
      param: param,
    };
    console.log(data);
    const res = await axios.get(`/product/${param}`);
    console.log(res.data);
    if (res.status == 200) {
      setProductlist(res.data);
    } else {
      setProductlist([]);
    }
  };
  const getProducts = async () => {
    const res = await axios.get("/product");
    console.log(res.data);
    if (res.status == 200) {
      setProductlist(res.data);
    } else {
      setProductlist([]);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <React.Fragment>
      <Box>
        <Typography
          variant="BODY2"
          sx={{ textAlign: "left", marginLeft: 10, marginRight: 10 }}
          component="h1"
        >
          {title}
        </Typography>
        <Grid container mt={2} mb={2} sx={{ marginLeft: 10, marginRight: 10 }}>
          <Grid item xs={5} sm={5} md={5} lg={5}>
            <form onSubmit={searchProducts}>
              <Paper
                sx={{
                  boxShadow: 0,
                  backgroundColor: grey[300],
                  borderRadius: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <InputBase
                  sx={{ textAlign: "left", paddingLeft: 3 }}
                  placeholder="Search for Products"
                  inputProps={{ "aria-label": "search google maps" }}
                  onChange={(e) => setParam(e.target.value)}
                />
                <Button
                  sx={{
                    color: grey[200],
                    textTransform: "capitalize",
                    backgroundColor: "#001eb9",
                    borderRadius: 15,
                    paddingLeft: 3,
                    paddingRight: 3,
                  }}
                  variant="text"
                  type="submit"
                  startIcon={
                    <SearchIcon sx={{ color: grey[200], fontWeight: 500 }} />
                  }
                >
                  Search{" "}
                </Button>
              </Paper>{" "}
            </form>
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
            <Link to="/addproduct">
              <Button
                sx={{
                  color: grey[200],
                  backgroundColor: "#001eb9",
                  paddingLeft: 3,
                  paddingRight: 3,
                  textTransform: "capitalize",
                }}
                variant="text"
              >
                New Product{" "}
              </Button>
            </Link>
          </Grid>
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
            <Button onClick={setFavProds} variant="outlined">
              <StarIcon />
            </Button>
          </Grid>
        </Grid>
        {searching ? (
          <>
            {" "}
            <Searchresults
              param={param}
              favourite={favProds}
              list={productlist}
            />
          </>
        ) : (
          <>
            <Viewproducts favourite={favProds} list={productlist} />
          </>
        )}
      </Box>
    </React.Fragment>
  );
}

export default ProdMain;
