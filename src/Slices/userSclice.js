import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
  password: '',
  access: '',
  designation: '',
  modules: '',
  profilePhoto: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetUserData: () => initialState,
  },
});

export const { setUserData, resetUserData } = userSlice.actions;
export default userSlice.reducer;
