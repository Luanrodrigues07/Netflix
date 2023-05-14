import React from "react";
import './FeaturedMovie.css'

export default ({item}) =>{
    console.log(item);

    let firstdate = new Date(item.first_air_date );
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }

    return(
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            
            
        }}>
        
            <div className="featuredVertical">
                <div className="featuredHorizontal">
                    <div className="featured-name">{item.original_name}</div>
                    <div className="featured-info">
                        <div className="featured-point">{item.vote_average} pontos</div>
                        <div className="featured-year">{firstdate.getFullYear()}</div>
                        <div className="featured-seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                   </div>
                   <div className="featured-description">{item.overview}</div>
                   <div className="featured-buttons">
                    <a href="{`/whatch/${item.id}`}" className="featured-play">▶ Assistir</a>
                    <a href="{`/add/${item.id}`}" className="featured-add">+ Minha Lista</a>


                   </div>
                   <div className="featured-genres"><strong>Generos:</strong> {genres.join(', ')}</div>
              </div>
            </div>
        </section>
    )
}