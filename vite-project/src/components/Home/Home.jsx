import React from "react";
// import { GetData } from "./helper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { Select, MenuItem, TextField, Grid, Button } from "@mui/material";
import { updateField } from "../../redux/homeSlice";
import { updateFieldBookmark } from "../../redux/bookmarkSlice";
import CircularProgress from "@mui/material/CircularProgress";
import { NavLink } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const getData = async (endpoint, param) => {
    const url = "https://api.quotable.io/" + endpoint;
    try {
      setLoading(true);
      const response = await axios.get(url, {
        params: param != "" ? { tags: param } : "",
      });
      // console.log("this response is in helper", response.data);
      if (endpoint == "random") {
        dispatch(
          updateField({ field: "quote", value: response?.data?.content })
        );
      } else {
        dispatch(updateField({ field: "tags", value: response?.data }));
      }
    } catch (error) {
      console.log("there exist Some error ", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getData("tags", "");
    getData("random", "");
  }, []);
  const [tag, setTag] = useState("");
  const homeData = useSelector((state) => state.home);

  useEffect(() => {
    getData("random", tag);
  }, [tag]);

  const handleOnClick = () => {
    dispatch(
      updateFieldBookmark({ field: "bookmarks", value: homeData.quote })
    );
  };

  console.log(homeData.tags[0]?.name);
  return (
    <>
      <h2>
        <NavLink to={"/bookmark"}>Go to Bookmarks</NavLink>
      </h2>
      <Grid container direction={"row"}>
        '
        <Grid item sx={{ width: "90%" }}>
          <Select
            placeholder="Choose the tag"
            value={tag}
            sx={{
              backgroundColor: "white",
              width: "100%",
              fontSize: "16px",
              borderRadius: "15px",
            }}
            onChange={(e) => setTag(e.target.value)}
          >
            <MenuItem
              value=""
              style={{ fontStyle: "normal", fontSize: "16px" }}
            >
              ----Choose Operator Type----
            </MenuItem>
            {homeData.tags.map((val) => {
              return <MenuItem value={val.name}>{val.name}</MenuItem>;
            })}
          </Select>
        </Grid>
        <Grid item sx={{ marginLeft: "5px" }}>
          {loading ? <CircularProgress></CircularProgress> : <></>}
        </Grid>
      </Grid>

      <h1>The random Quote is </h1>
      <h1>{homeData.quote}</h1>
      <Button
        style={{
          backgroundColor: "green",
          color: "white",
          width: "150px",
          height: "45px",
          fontSize: "12px",
          margin: "8px",
          borderRadius: "30px",
        }}
        onClick={handleOnClick}
      >
        Bookmark This
      </Button>
    </>
  );
}

export default Home;
