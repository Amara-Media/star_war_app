import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
  userData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    set: (state, action) => {
      state.userData = action.payload.map((user) => user);
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    update: (state, action) => {
      state.userData[action.payload.itemName] = action.payload.itemData;
    },
  },
});

export const setUserData = (data) => {
  return async (dispatch) => {
    try {
      dispatch(userActions.setUserData(data));
    } catch (err) {
      throw err;
    }
  };
};

export const userActions = userSlice.actions;

export default userSlice.reducer;
