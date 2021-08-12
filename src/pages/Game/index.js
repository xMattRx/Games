import React, { useState, useEffect } from 'react';
import { api, key } from '../../service/api';



export function Game() {
    const [game, setGame] = useState({});

    const getGames = () => {
        var id = window.location.href.split("/")[4]
        const game = api.get(`api/games/${id}?key=${key}`)
        game.then((element) => {
            console.log("elemento", element.data)
            setGame(element.data);
        })
    }

    useEffect(() => {
        Object.keys(game).length === 0 &&
            getGames()
    }, [])

    return (
        <> {game.name !== undefined ?
            <>
                <p>{`Nome: ${game.name}`}</p>
                <p>{`Descrição: ${game.description_raw}`}</p>
                <p>{`Metacritic: ${game.metacritic}`}</p>
                <img style={{ width: 600 }} src={`${game.background_image}`} />
            </> : <p>Carregando</p>
        }


        </>
    )
}
