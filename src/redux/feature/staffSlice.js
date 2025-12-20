import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getApiData, getSecureApiData, securePostData } from "../../Services/api";

// Async thunk to fetch staff profile
export const fetchStaffProfile = createAsyncThunk(
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
export const fetchStaffDetail = createAsyncThunk(
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
        clearStaffProfiles: (state) => {
            state.staffData = null;
            state.error = null;
            state.loading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStaffProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchStaffProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.profiles = action.payload;
            })
            .addCase(fetchStaffProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchStaffDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchStaffDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.staffData = action.payload.employee
                state.employment = action.payload.employment;
                state.professional = action.payload.professional;
                state.empAccess = action.payload.empAccess;
                state.isOwner= localStorage.getItem('isOwner') === 'true' ?true:false;
                state.permissions= JSON.parse(localStorage.getItem('permissions')) || null;
            })
            .addCase(fetchStaffDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearStaffProfiles, setOwner, setPermissions } = staffSlice.actions;
export default staffSlice.reducer;
