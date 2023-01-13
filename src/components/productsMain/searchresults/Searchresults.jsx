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
import Singleresult from "./singleresult/Singleresult";

function Searchresults(props) {
  const favTrigger = props.favourites;
  const prodlist = props.list;
  const param = props.param;
  const [filteredlist, setFilteredlist] = useState([]);
  useEffect(() => {
    if (favTrigger == true) {
      prodlist.map((item, index) => {
        if (item.IsFavourite == false) {
          prodlist.splice(index, 1);
        }
      });
      setFilteredlist(prodlist);
    } else {
      setFilteredlist(prodlist);
    }
  }, [props]);
  return (
    <React.Fragment>
      <Box>
        <Typography
          variant="BODY2"
          sx={{
            textAlign: "left",
            color: "#969191",
            marginLeft: 10,
            marginRight: 10,
            marginTop: 5,
          }}
          component="h4"
        >
          {prodlist.length} results found for '{param}
        </Typography>
        {prodlist.length > 0 ? (
          prodlist.map((product) => <Singleresult product={product} />)
        ) : (
          <></>
        )}
      
      </Box>
    </React.Fragment>
  );
}

export default Searchresults;
