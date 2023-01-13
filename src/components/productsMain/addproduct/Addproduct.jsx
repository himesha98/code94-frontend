import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Input,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { grey } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
function Addproduct() {
  const [name, setName] = useState();
  const [scu, setScu] = useState();
  const [desc, setDesc] = useState();
  const [qty, setQty] = useState();
  const [images, setImages] = useState([]);
  const [fav, setFav] = useState(false);
  const [price, setPrice] = useState();
  const [filenames, setfilenames] = useState([]);
  const filehandler = () => {};

  const handlesubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    //const fileName = Date.now() + images.name;

    if (images) {
      const data = new FormData();
      const fileName = Date.now() + images.name;
      data.append("name", fileName);
      data.append("file", images);
      filenames.push(fileName);
      try {
        await axios.post("/api/upload", data);
      } catch (err) {
        console.log(err);
      } finally {
        const data = {
          SCU: scu,
          Quantity: qty,
          ProductName: name,
          Image: filenames,
          Desc: desc,
          IsFavourite: fav,
          Price: price,
        };
        const res = await axios.post("/api/product", data);
      }
    }

    // const submit_data_fetch = await axios.post("/upload", formdata);
  };
  return (
    <React.Fragment>
      <Box>
        <Box
          sx={{ display: "flex", alignItems: "center", justifyContent: "left" }}
        >
          <Link style={{textDecoration:"none" }} to="/">
            <Typography
              variant="BODY2"
              sx={{ textAlign: "left", marginLeft: 10, marginRight: 5 }}
              component="h1"
            >
              PRODUCTS{" "}
            </Typography>
          </Link>
          <ArrowForwardIosIcon sx={{ color: "#001eb9" }} />
          <Typography
            variant="BODY4"
            sx={{
              textAlign: "left",
              color: "#001eb9",
              marginLeft: 5,
              marginRight: 10,
            }}
            component="h2"
          >
            Add Product
          </Typography>
        </Box>

        <form
          action="/upload"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handlesubmit}
        >
          <Grid
            container
            mt={5}
            mb={2}
            sx={{ marginLeft: 10, marginRight: 10 }}
          >
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
            >
              <Typography
                variant="BODY2"
                sx={{
                  textAlign: "center",
                  color: "#000000",
                  width: "fit-content",
                }}
                component="h4"
              >
                SCU
              </Typography>
              <InputBase
                sx={{
                  textAlign: "left",
                  marginLeft: 3,
                  paddingLeft: 3,
                  backgroundColor: "#f7f7f7",
                  ":required": true,
                }}
                onChange={(e) => setScu(e.target.value)}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
              item
              xs={6}
              sm={6}
              md={6}
              lg={6}
            >
              <Typography
                variant="BODY2"
                sx={{
                  textAlign: "center",
                  color: "#000000",
                  width: "fit-content",
                }}
                component="h4"
              >
                Price
              </Typography>
              <InputBase
                sx={{
                  textAlign: "left",
                  marginLeft: 3,
                  paddingLeft: 3,
                  backgroundColor: "#f7f7f7",
                }}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid
            container
            mt={2}
            mb={2}
            sx={{ marginLeft: 10, marginRight: 10 }}
          >
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
              item
              xs={6}
              sm={6}
              md={6}
              lg={6}
            >
              <Typography
                variant="BODY2"
                sx={{
                  textAlign: "center",
                  color: "#000000",
                  width: "fit-content",
                }}
                component="h4"
              >
                Name
              </Typography>
              <InputBase
                sx={{
                  textAlign: "left",
                  marginLeft: 3,
                  paddingLeft: 3,
                  backgroundColor: "#f7f7f7",
                }}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
              }}
              item
              xs={6}
              sm={6}
              md={6}
              lg={6}
            >
              <Typography
                variant="BODY2"
                sx={{
                  textAlign: "center",
                  color: "#000000",
                  width: "fit-content",
                }}
                component="h4"
              >
                QTY
              </Typography>
              <InputBase
                sx={{
                  textAlign: "left",
                  marginLeft: 3,
                  paddingLeft: 3,
                  backgroundColor: "#f7f7f7",
                }}
                inputProps={{ "aria-label": "" }}
                onChange={(e) => setQty(e.target.value)}
              />
            </Grid>
            <Grid
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center",
              }}
              item
              xs={10}
              sm={10}
              md={10}
              lg={10}
            >
              <Typography
                variant="BODY2"
                sx={{
                  textAlign: "center",
                  color: "#000000",
                  width: "fit-content",
                }}
                component="h4"
              >
                Product Description
              </Typography>
              <Typography
                variant="body3"
                sx={{
                  marginTop: 1,
                  textAlign: "center",
                  color: "#000000",
                  width: "fit-content",
                }}
                component="h6"
              >
                {" "}
                A small decription about the product
              </Typography>
              <InputBase
                sx={{
                  textAlign: "left",
                  marginTop: 2,
                  paddingLeft: 3,
                  marginRight: 10,
                  backgroundColor: "#f7f7f7",
                }}
                onChange={(e) => setDesc(e.target.value)}
                inputProps={{ "aria-label": "" }}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center",
              }}
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <Typography
                variant="BODY2"
                sx={{
                  textAlign: "center",
                  color: "#000000",
                  width: "fit-content",
                  marginTop: 3,
                }}
                component="h4"
              >
                Product Images
              </Typography>
              <Typography
                variant="BODY8"
                sx={{
                  textAlign: "center",
                  color: "#000000",
                  width: "fit-content",
                  marginTop: 1,
                }}
                component="h5"
              >
                {" "}
                JPEG, PNG,SVG or GIF [Maximum file size ins 50 mb]
              </Typography>
              <Button
                sx={{
                  color: "#001eb9",
                  width: 200,
                  paddingLeft: 1,
                  paddingRight: 1,
                  textTransform: "capitalize",
                }}
                variant="text"
              >
                <input
                  accept="image/*"
                  id="file"
                  name="uploadedImages"
                  multiple
                  type="file"
                  onChange={(e) => setImages(e.target.files[0])}
                />
                Add Images{" "}
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            mt={2}
            mb={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              marginRight: 10,
            }}
          >
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              xs={3}
              sm={3}
              md={3}
              lg={3}
            >
              <Button
                sx={{
                  color: grey[200],
                  backgroundColor: "#001eb9",
                  paddingLeft: 3,
                  paddingRight: 3,
                  textTransform: "capitalize",
                }}
                variant="text"
                type="submit"
              >
                Add Product{" "}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </React.Fragment>
  );
}

export default Addproduct;
