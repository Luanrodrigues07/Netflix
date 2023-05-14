import React, { useEffect, useState } from "react";
import tmdb from "./tmdb";
import MovieRow from "./components/MovieRow/MovieRow";
import './App.css'
import './components/Featured/FeaturedMovie'
import FeaturedMovie from "./components/Featured/FeaturedMovie";
import Header from "./components/Header/HeaderSite";

const App = () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)
  
 

  useEffect(()=>{
    const loadAll = async () =>{
      // get all movies list
      let list = await tmdb.getHomeList();
      setMovieList(list);

      //pagando o filme em destaque
      let originals =  list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let Chosen = originals[0].items.results[randomChosen];
      let ChosenInfo = await tmdb.getMovieInfo(Chosen.id, 'tv');
      setFeaturedData(ChosenInfo);
    }
    
    loadAll();
  },[])

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);


  return(
    <div className="page">

      <Header black={blackHeader}/>
      
      {featuredData &&
      <FeaturedMovie item={featuredData}/> 

} 
      <section className="list">
        {movieList.map((item,key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
      <footer>
        Este projeto foi desenvolvido apenas para estudos!<br/>
        Todos os direitos de imagem são da Netflix<br/>
        Dados: Themoviedb.org
      </footer>
      {movieList.length <= 0 &&
      <div className="loading ">
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando"/>
      </div>
      }
    </div>
  );
} 

export default App;