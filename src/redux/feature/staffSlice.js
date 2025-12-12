import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getApiData, getSecureApiData, securePostData } from "../../Services/api";

// Async thunk to fetch staff profile
export const fetchUserProfile = createAsyncThunk(
    "staffProfile/fetch",
    async (searchText, { rejectWithValue }) => {
        try {
            if(!localStorage.getItem('staffId')) return rejectWithValue(error.response?.data?.message || error.message);
            const response = await getSecureApiData(`pharmacy/staff-data/${localStorage.getItem('staffId')}`);
            console.log("hehe")
            if (response.success) {
                return response.employee;
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);
export const fetchUserDetail = createAsyncThunk(
    "staffDetail/fetch",
    async (searchText, { rejectWithValue }) => {
        try {
            if(!localStorage.getItem('staffId')) return rejectWithValue(error.response?.data?.message || error.message);
            const response = await getSecureApiData(`pharmacy/staff-data/${localStorage.getItem('staffId')}`);
            if (response.success) {
                console.log(response.employee)
                return response;
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);
const staffSlice = createSlice({
    name: "staffProfile",
    initialState: {
        staffData: null,
        employment: null,
        professional: null,
        empAccess: null,       
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
                state.staffData = action.payload.employee
                state.employment = action.payload.employment;
                state.professional = action.payload.professional;
                state.empAccess = action.payload.empAccess;
            })
            .addCase(fetchUserDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearProfiles, setOwner, setPermissions } = staffSlice.actions;
export default staffSlice.reducer;
