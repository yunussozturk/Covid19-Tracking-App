import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const countryNamesApi = createAsyncThunk('country', async () =>{
    const res = await axios(`https://api.covid19api.com/countries`)
    return res.data;
})

export const selectedCountryDataApi = createAsyncThunk('veriler', async (selectedCountry) =>{
    const res = await axios(`https://api.covid19api.com/country/${selectedCountry}`)
    return res.data;
})

export const globalDataApi = createAsyncThunk('globalveriler', async () =>{
    const res = await axios(`https://api.covid19api.com/world/total`)
    return res.data;
})
 
export const covidSlice = createSlice({
    name : "covid",
    initialState :{
        countryNames : [],
        selectedCountry : "global",
        selectedCountryData : [],
        dataAPIisLoading : false,
        globalData : {},
    },
    reducers : {
        changeSelectedCountry : (state , action) =>{
            state.selectedCountry = action.payload
        }
    },
    extraReducers : {
        [countryNamesApi.fulfilled] : (state , action) =>{
            state.countryNames = action.payload
        },
        [selectedCountryDataApi.pending] : (state ,action) =>{
            state.dataAPIisLoading = true
        },
        [selectedCountryDataApi.fulfilled] : (state , action) =>{
            state.dataAPIisLoading = false
            state.selectedCountryData = action.payload.pop()
        },
        [globalDataApi.pending] : (state , action) =>{
            state.dataAPIisLoading = true
        },
        [globalDataApi.fulfilled] : (state , action) =>{
            state.dataAPIisLoading = false
            state.globalData = action.payload
        }
    }
});

export const {changeSelectedCountry} = covidSlice.actions;
export default covidSlice.reducer;