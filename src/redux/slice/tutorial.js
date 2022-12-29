import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addTutorial,
  deleteTutorial,
  getTutorial,
  searchTutorial,
  updateTutorial,
} from "../../lib/apis";

export const addNewTutorial = createAsyncThunk(
  "tutorial/create",
  async ({ title, description, userId }) => {
    // api call
    const result = await addTutorial({ title, description, userId });
    return result.data;
  }
);

export const getTutorialThunk = createAsyncThunk("tutorial/get", async () => {
  const result = await getTutorial();

  return result.data;
});

export const updateTutorialThunk = createAsyncThunk(
  "tutorial/update",
  async (data) => {
    const result = await updateTutorial(data.tutorialId, data);

    return result.data;
  }
);

export const deleteTutorialThunk = createAsyncThunk(
  "tutorial/delete",
  async (id) => {
    const result = await deleteTutorial(id);

    return result.data;
  }
);

export const searchTutorialThunk = createAsyncThunk(
  "tutorial/search",
  async (data) => {
    const result = await searchTutorial(data);

    return result.data;
  }
);

const tutorialSlice = createSlice({
  name: "tutorial",
  initialState: { title: "", description: "", tutorials: [] },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addNewTutorial.fulfilled, (state, action) => {
        state.title = action.payload.title;
        state.description = action.payload.description;
      })
      .addCase(getTutorialThunk.fulfilled, (state, action) => {
        state.tutorials = action.payload.data;
      })
      .addCase(updateTutorialThunk.fulfilled, (state, action) => {})
      .addCase(deleteTutorialThunk.fulfilled, (state, action) => {})
      .addCase(searchTutorialThunk.fulfilled, (state, action) => {
        state.tutorials = action.payload.data;
      });
  },
});

export default tutorialSlice.reducer;
