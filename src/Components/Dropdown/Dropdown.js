import React, { useEffect } from 'react'
import "./style.css"

import { countryNamesApi , changeSelectedCountry } from '../../redux/CovidSlice'
import { useSelector , useDispatch } from 'react-redux'

function Dropdown() {

  const dispatch = useDispatch()

// sayfa açıldığında ülke isimleri verileri çekildi ve kullanıldı
  useEffect(() =>{
    dispatch(countryNamesApi())
  },[])

  const countryNames = useSelector((state) => state.covid.countryNames)

  return (
    <div className='country1'>
      <select onChange={(e) => dispatch(changeSelectedCountry(e.target.value))}> 
        <option value="global">Global</option> 
        {
            countryNames.map((data) => (
                <option value={data.Country} key={data.Slug}>{data.Country}</option>
            ))
        }
      </select>
    </div>
  )
}

export default Dropdown