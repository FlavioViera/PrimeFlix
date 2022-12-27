import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import api from '../../services/api'



//URL DA API: movie/now_playing?api_key=54c1cabd2f5d280cd03f7ec7b2ea23ca&language=pt-BR

function Home() {

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: '54c1cabd2f5d280cd03f7ec7b2ea23ca',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            //console.log(response.data.results.slice(0, 10));

            setFilmes(response.data.results.slice(0, 10))

        }

        loadFilmes();
        setLoading(false);

    }, [])


    if(loading){
        return(
            <div className='loading'>
                <h2>Carregando filmes...</h2>
            </div>
        )
    }


    return (
        <div className='container' >
            <div className='lista-filmes' >
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id} >
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/Movie/${filme.id}`} >Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}

export default Home;