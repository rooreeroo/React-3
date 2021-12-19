import React from 'react';
import './styles.css';


function Pages({changePage, pages, page, limit}) {     // changePage - функция | pages - количество товаров (общее) | limit - количество на странице | page - текущая страница
    let pagesArray = Array.apply(null, {length: Math.ceil(pages/limit)}).map(Number.call, Number);


    return (
        <div className="nav_pages">
            <ul>
                {pagesArray.map(item =>
                    <li key={item} >
                        <a className={item === page ? "active" : ''} onClick={() => changePage(item, limit)} >{item+1}</a>
                    </li>
                )}
            </ul>
        </div>
    );
}



export default React.memo(Pages);