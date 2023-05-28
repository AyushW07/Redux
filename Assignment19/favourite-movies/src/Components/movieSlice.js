import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movie/fetchMovies", async () => {
  try {
    const response = await axios.get(
      "https://www.omdbapi.com/?s=action&apikey=77ffa273&page=1"
    );
    return response.data.Search;
  } catch (error) {
    throw Error("Failed to fetch data");
  }
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default movieSlice.reducer;
