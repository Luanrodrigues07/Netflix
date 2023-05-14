import React from "react";
import './FeaturedMovie.css'

export default ({item}) =>{
    console.log(item);

    let firstdate = new Date(item.first_air_date );
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }

    let description = item.overview;
    if(description.length > 200){
        description = description.substring(0, 200)+'...';
    }

    let dimi = item.vote_average;
    if(dimi){
        dimi = dimi * 10;
        dimi = Math.round(dimi);
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
                        <div className="featured-point">{dimi}% Relevante</div>
                        <div className="featured-year">{firstdate.getFullYear()}</div>
                        <div className="featured-seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                   </div>
                   <div className="featured-description">{description}</div>
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