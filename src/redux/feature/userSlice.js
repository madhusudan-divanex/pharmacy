import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getApiData, getSecureApiData, securePostData } from "../../Services/api";

// Async thunk to fetch user profile
export const fetchUserProfile = createAsyncThunk(
    "userProfile/fetch",
    async (searchText, { rejectWithValue }) => {
        try {
            const response = await getSecureApiData(`pharmacy/${localStorage.getItem('userId')}`);
            if (response.success) {
                return response.data;
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);
export const fetchUserDetail = createAsyncThunk(
    "userDetail/fetch",
    async (searchText, { rejectWithValue }) => {
        try {
            const response = await getSecureApiData(`pharmacy/detail/${localStorage.getItem('userId')}`);
            if (response.success) {
                console.log(response)
                return response;
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);
const userSlice = createSlice({
    name: "userProfile",
    initialState: {
        profiles: null,
        pharPerson: null,
        pharAddress: null,
        pharImg: null,
        rating: null,
        avgRating: null,
        pharLicense: null,
        isRequest: null,
        loading: false,
        error: null,
        isOwner: localStorage.getItem('isOwner') === 'true' ?true:false, // <-- read from localStorage
        permissions: JSON.parse(localStorage.getItem('permissions')) || null,
    },
    reducers: {
        clearProfiles: (state) => {
            state.profiles = [];
            state.error = null;
            state.loading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.profiles = action.payload;
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchUserDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserDetail.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action)
                state.profiles = action.payload.user
                state.pharAddress = action.payload.pharAddress;
                state.pharImg = action.payload.pharImg;
                state.rating = action.payload.rating;
                state.avgRating = action.payload.avgRating;
                state.pharPerson = action.payload.pharPerson;
                state.isRequest = action.payload.isRequest
                state.pharLicense = action.payload.pharLicense;
            })
            .addCase(fetchUserDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearProfiles, setOwner, setPermissions } = userSlice.actions;
export default userSlice.reducer;
