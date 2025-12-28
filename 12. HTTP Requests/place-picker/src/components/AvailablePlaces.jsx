import { useState } from "react";

import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
    const [availablePlaces, setAvailablePlaces] = useState([]);

    fetch("http://loaclhost:3000/places").then(response=> {
      response.json()
    }).then(resData=> {
      setAvailablePlaces(resData.places)
    });

    return (
        <Places
            title="Available Places"
            places={availablePlaces}
            fallbackText="No places available."
            onSelectPlace={onSelectPlace}
        />
    );
}
