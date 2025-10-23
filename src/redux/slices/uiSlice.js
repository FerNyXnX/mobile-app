import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: true,
  isLoading: false,
  selectedTab: 'home',
  language: 'es',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSelectedTab: (state, action) => {
      state.selectedTab = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { toggleDarkMode, setLoading, setSelectedTab, setLanguage } = uiSlice.actions;

export default uiSlice.reducer;