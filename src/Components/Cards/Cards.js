import React, { useEffect } from 'react'
import "./style.css"

import { selectedCountryDataApi , globalDataApi } from '../../redux/CovidSlice';
import { useSelector , useDispatch } from 'react-redux'

import moment from "moment"

function Cards() {

  const dispatch = useDispatch()
  const selectedCountry = useSelector((state) => state.covid.selectedCountry)

// seçili ülke her değiştiğinde , seçilen ülkenin verileri çekildi
  useEffect(() =>{
    selectedCountry === "global" ? dispatch(globalDataApi()) : dispatch(selectedCountryDataApi(selectedCountry))
  },[selectedCountry])

  const selectedCountryData = useSelector((state) => state.covid.selectedCountryData)
  const dataAPIisLoading = useSelector((state) => state.covid.dataAPIisLoading)

// tarih ve saat moment package ile istediğimiz formata çevrildi
  let date = selectedCountryData.Date
  let day = moment(date).utc().format("MMM Do YY")
  let time = moment(date).utc().format('h:mm:ss a')

  const globalData = useSelector((state) => state.covid.globalData)

  const today = new Date();
  const today2 = moment(today).utc().format("MMM Do YY")

  return (
    <div className='data1'>
      <div className='container data2'>
        <div className='row data3'>
            <div className='col-sm-3 data4'>
                <div className='data8'>
                    <div className='data9'>Infected</div>
                    {
                        dataAPIisLoading ? 
                        (
                            <>
                                <div className='data10'>Loading...</div>
                                <div className='data11'>Last Update at :</div>
                                <div className='data12'>Loading...<br /> Loading... </div>
                                <div className='data13'>Number of active <br /> cases of COVID-19</div>
                                <div className='data14'>Loading...</div>
                            </>
                        ) :
                        (
                            <>
                                <div className='data10'>{
                                    selectedCountry === "global" ? `${globalData.TotalConfirmed}` : `${selectedCountryData.Confirmed}`
                                }</div>
                                <div className='data11'>Last Update at :</div>
                                <div className='data12'>{selectedCountry === "global" ? `${today2}` : `${day}`}<br /> {selectedCountry === "global" ? "12:00:00 am" : `${time}`} </div>
                                <div className='data13'>Number of active  <br /> cases of COVID-19</div>
                                <div className='data14'>{selectedCountry === "global" ? "WORLD" : `${selectedCountryData.CountryCode}`}</div>
                            </>
                        )
                    }
                </div>
            </div>
            <div className='col-sm-3 data5'>
                <div className='data8'>
                    <div className='data9'>Recovered</div>
                    {
                        dataAPIisLoading ?
                        (
                            <>
                            <div className='data10'>Loading...</div>
                            <div className='data11'>Last Update at :</div>
                            <div className='data12'>Loading...<br /> Loading... </div>
                            <div className='data13'>Number of recoveries <br /> from COVID-19</div>
                            <div className='data14'>Loading...</div>
                            </>
                        ) :
                        (
                            <>
                            <div className='data10'>{
                                selectedCountry === "global" ? `${globalData.TotalConfirmed - globalData.TotalDeaths}` : `${selectedCountryData.Active - selectedCountryData.Deaths}`
                            }</div>
                            <div className='data11'>Last Update at :</div>
                            <div className='data12'>{selectedCountry === "global" ? `${today2}` : `${day}`}<br /> {selectedCountry === "global" ? "12:00:00 am" : `${time}`} </div>
                            <div className='data13'>Number of active  <br /> cases of COVID-19</div>
                            <div className='data14'>{selectedCountry === "global" ? "WORLD" : `${selectedCountryData.CountryCode}`}</div>
                            </>
                        )
                    }
                </div>
            </div>
            <div className='col-sm-3 data6'>
                <div className='data8'>
                    <div className='data9'>Deaths</div>
                    {
                        dataAPIisLoading ? 
                        (
                            <>
                            <div className='data10'>Loading...</div>
                            <div className='data11'>Last Update at :</div>
                            <div className='data12'>Loading...<br /> Loading... </div>
                            <div className='data13'>Number of deaths <br /> caused by COVID-19</div>
                            <div className='data14'>Loading...</div>
                            </>
                        ) :
                        (
                            <>
                            <div className='data10'>{
                                selectedCountry === "global" ? `${globalData.TotalDeaths}` : `${selectedCountryData.Deaths}`
                            }</div>
                            <div className='data11'>Last Update at :</div>
                            <div className='data12'>{selectedCountry === "global" ? `${today2}` : `${day}`}<br /> {selectedCountry === "global" ? "12:00:00 am" : `${time}`} </div>
                            <div className='data13'>Number of active  <br /> cases of COVID-19</div>
                            <div className='data14'>{selectedCountry === "global" ? "WORLD" : `${selectedCountryData.CountryCode}`}</div>
                            </>
                        )
                    }
                </div>
            </div>
            <div className='col-sm-3 data7'>
                <div className='data8'>
                    <div className='data9'>Active</div>
                    {
                        dataAPIisLoading ? 
                        (
                            <>
                            <div className='data10'>Loading...</div>
                            <div className='data11'>Last Update at :</div>
                            <div className='data12'>Loading...<br /> Loading... </div>
                            <div className='data13'>Number of active <br /> cases of COVID-19</div>
                            <div className='data14'>Loading...</div>
                            </>
                        ) :
                        (
                            <>
                            <div className='data10'>{
                                selectedCountry === "global" ? `${(globalData.TotalConfirmed * 0.95).toFixed(0)}` : `${selectedCountryData.Active}`
                            }</div>
                            <div className='data11'>Last Update at :</div>
                            <div className='data12'>{selectedCountry === "global" ? `${today2}` : `${day}`}<br /> {selectedCountry === "global" ? "12:00:00 am" : `${time}`} </div>
                            <div className='data13'>Number of active  <br /> cases of COVID-19</div>
                            <div className='data14'>{selectedCountry === "global" ? "WORLD" : `${selectedCountryData.CountryCode}`}</div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cards