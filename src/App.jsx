import React, { Fragment, useContext, useEffect } from 'react';
import { Store } from './Store';

export default function App() {
    const { state, dispatch } = useContext(Store);

    const fetchDataAction = async () => {
        const data = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
        const dataJSON = await data.json();
        return dispatch({
            type: 'FETCH_DATA',
            payload: dataJSON._embedded.episodes
        });
    };

    useEffect(() => {
        state.episodes.length === 0 &&
        fetchDataAction();
    });

    return (
        <Fragment>
            {console.log(state, dispatch)}
            <div>
                <h1>Rick and Morty</h1>
                <p>Pick your favourite episodes</p>
                <section>
                    {state.episodes.map(episode => {
                        return (
                            <section key={episode.id}>
                                <img
                                    src={episode.image && episode.image.medium}
                                    alt={`Rick and Morty ${episode.name}`}
                                />
                                <div>{episode.name}</div>
                                <section>
                                    <div>
                                        Season: {episode.season} Number: {episode.number}
                                    </div>
                                </section>
                            </section>
                        );
                    })}
                </section>
            </div>
        </Fragment>
    );
}
