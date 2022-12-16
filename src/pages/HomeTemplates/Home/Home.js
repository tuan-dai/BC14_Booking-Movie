import React, { useEffect } from 'react'
import ListFilm from './ListFilm';
import ShowtimeInfo from './ShowtimeInfo';
import Carousel from './Carousel';

export default function Home() {

    return (
        <section>
            <Carousel />
            <ListFilm />
            <ShowtimeInfo />
        </section>
    )
}
