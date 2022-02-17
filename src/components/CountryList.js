import React from 'react'
import Country from './Country'
import CountryContainer from '../containers/CountryContainer'

const CountryList = ({countries, onCountrySelected, addToFavourites}) => {

    const CountryItems = countries.map((country, index) => {
        return <Country country={country} key={index} onCountryClick={onCountrySelected} addToFavourites={addToFavourites}/>
    })

    return (
        <ul>
            {CountryItems}
        </ul>
    )
}

export default CountryList