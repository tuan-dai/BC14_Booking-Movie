import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ListFilm from './ListFilm';
import ShowtimeInfo from './ShowtimeInfo';
import Slider from './Slider';



export default function Home() {

    return (
        <section>
            <Slider />
            <ListFilm />
            <ShowtimeInfo />
        </section>
    )
}
