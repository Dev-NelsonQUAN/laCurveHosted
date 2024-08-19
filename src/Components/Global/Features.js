// // userSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     user: null,
//     isAuthenticated: false,
//     error: null,
    
// };
// // console.log(initialState.user);


// const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         registerUser: (state, action) => {
//             state.user = action.payload; 
//             state.isAuthenticated = false; 
//             state.error = null;
//         },
//         loginUser: (state, action) => {
//             const { email, password } = action.payload;
//             if (state.user && state.user.email === email && state.user.password === password) {
//                 state.isAuthenticated = true;
//                 state.error = null;
//             } else {
//                 state.error = "Invalid email or password";
//             }
//         },
//         logoutUser: (state) => {
//             state.user = null;
//             state.isAuthenticated = false;
//         },
//         setError: (state, action) => {
//             state.error = action.payload;
//         },
//     },
// });

// export const { registerUser, loginUser, logoutUser, setError } = userSlice.actions;
// export default userSlice.reducer;
