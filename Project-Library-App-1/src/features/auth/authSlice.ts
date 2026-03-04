import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
  token: localStorage.getItem("token") || null,
  isAuthenticated: !!localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: any; token: string }>,
    ) => {
      // 1. Ambil data user dari API
      const user = { ...action.payload.user };

      // 2. PAKSA ROLE: Jika email admin@library.local, jadikan admin
      user.role = user.email === "admin@library.local" ? "admin" : "user";

      // 3. Simpan ke State
      state.user = user;
      state.token = action.payload.token;
      state.isAuthenticated = true;

      // 4. Simpan ke LocalStorage agar saat refresh tidak hilang
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.clear(); 
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
