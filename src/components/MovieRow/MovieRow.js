import React, { useState } from "react";
import './MovieRow.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(-400);

    const HandleftArrow = () =>{
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }

    const HandlerightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if(window.innerWidth -listW > x){
            x = (window.innerWidth -listW) - 60;
        }
        setScrollX(x)

    }

    return (
        <div className="MovieRow">
            <h2>{title}</h2>

            <div className="MovieRow-left" onClick={HandleftArrow}>
                <FiChevronLeft style={{fontSize: 50}}/></div>

            <div className="MovieRow-right" onClick={HandlerightArrow}>
            <FiChevronRight style={{fontSize: 50}}/></div>

            <div className="MovieRow--listArea">
                <div className="MovieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="MovieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}