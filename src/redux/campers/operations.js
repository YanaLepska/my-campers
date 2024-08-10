import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://66b33d227fba54a5b7ec136b.mockapi.io",
});

export const fetchAdvert = createAsyncThunk(
  "advert/fetch",
  async (id, thunkAPI) => {
    try {
      const endpoint = id ? `/advert/${id}` : "/advert";
      const response = await instance.get(endpoint);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


