/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react';
import { api, key } from '../../service/api';
import { Link } from "react-router-dom";

export function Home() {

    const [games, setGames] = useState([]);
    const [next, setNext] = useState("");
    const [previous, setPrevious] = useState("");

    const getGames = () => {
        const games = api.get(`api/games?key=${key}`)
        games.then((element, key) => {
            setGames(element.data.results);
            setNext(element.data.next);
            setPrevious(element.data.previous);
        })
    }

    const handleNext = () => {
        const url = next.split("/")[4]
        const games = api.get(`api/${url}`)
        games.then((element, key) => {
            setGames(element.data.results);
            setNext(element.data.next);
            setPrevious(element.data.previous);
        })
    }

    const handlePrevious = () => {
        const url = previous.split("/")[4]
        console.log(url)
        const games = api.get(`api/${url}`)
        games.then((element, key) => {
            setGames(element.data.results);
            setNext(element.data.next);
            setPrevious(element.data.previous);
        })
    }



    useEffect(() => {
        {
            games.length === 0 &&
                getGames()
        }
    }, [])

    return (
        <>
            {games.length === 0 ? <p>Carregando</p> :
                games.map((element, key) => {
                    return <Link key={key} to={`game/${element.id}`}><p>{`${element.name}`}</p></Link>
                })
            }

            {
                previous === "" || previous === null ? <></> : <Link to="/"><p onClick={handlePrevious}>Previous</p></Link>
            }
            {
                next === "" || next === null ? <></> : <Link to="/"><p onClick={handleNext}>Next</p></Link>
            }


        </>
    )
}
