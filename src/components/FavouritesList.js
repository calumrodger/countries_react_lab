import React from 'react'
import Country from './Country'
import CountryContainer from '../containers/CountryContainer'

const FavouritesList = ({favourites, onCountrySelected}) => {

    const FavouriteItems = favourites.map((country, index) => {
        return <Country country={country} key={index} onCountryClick={onCountrySelected} />
    })

    return (
        <ul>
            {FavouriteItems}
            test
        </ul>
    )
}

export default FavouritesList