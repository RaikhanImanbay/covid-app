import React, { useEffect, useState } from 'react';
import countries from 'i18n-iso-countries';
import Select from "react-select";

const URL = 'http://localhost:3001/api';


export default function MainPage() {

    const [countryCodes, setCountryCodes] = useState([]);

    useEffect(() => {
        getCountryList();
    }, []);

    async function getCountryList() {
        let response = await fetch(`${URL}/country-list`);
        let data = await response.json();
        console.log(data);
        setCountryCodes(data);
    }

    return (
        <div>
            {/* <div>COUNTRY:  {countries.getNames(, "en")}</div> */}
            <Select>
            
            </Select>
            </div>
    );
}