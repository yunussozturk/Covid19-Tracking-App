import React from 'react'
import "./style.css"

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

import { useSelector } from 'react-redux';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

function Graphic() {

//chart.js ve react-chartjs-2 package ları ile oluşturulan grafiğe gerekli değerler atandı

  const selectedCountryData = useSelector((state) => state.covid.selectedCountryData)
  const globalData = useSelector((state) => state.covid.globalData)
  const selectedCountry = useSelector((state) => state.covid.selectedCountry)

  const data = {
    labels: ['Infected','Recovered','Deaths','Active'],
    datasets: [
        {
            label : `Current State in TR`,
            data : selectedCountry === "global" ? 
            [globalData.TotalConfirmed , (globalData.TotalConfirmed - globalData.TotalDeaths) , globalData.TotalDeaths , (globalData.TotalConfirmed * 0.95).toFixed(0)] : 
            [selectedCountryData.Confirmed , (selectedCountryData.Active - selectedCountryData.Deaths) , selectedCountryData.Deaths , selectedCountryData.Active],
            backgroundColor: ["rgb(147, 214, 245)", "rgb(215, 248, 173)","rgb(235, 164, 147)","rgb(243, 222, 194)"],
            borderColor : 'black',
            borderWidth : 1,
        }
    ]
  }

  const options = {}

  return (
    <div className='graphic1'>
      <div>
      <Bar
        data={data}
        options={options}
        />
      </div>
    </div>
  )
}

export default Graphic