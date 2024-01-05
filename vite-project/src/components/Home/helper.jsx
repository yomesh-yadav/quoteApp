import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../../redux/homeSlice";

export const GetData = async (endpoint, param) => {

  const url = "https://api.quotable.io/" + endpoint;
  try {
    const response = await axios.get(url, {
      params: param != "" ? { tags: param } : "",
    });
    // console.log("this response is in helper", response.data);
    if (endpoint == "random") {
      dispatch(updateField({ field: "quote", value: response?.data?.content }));
    } else {
      dispatch(updateField({ field: "tags", value: response?.data }));
    }
  } catch (error) {
    console.log("there exist Some error ", error);
  }
};
