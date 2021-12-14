import React from 'react';
import './styles.css';





function Pages({store, pages}) {
    let pagesArray = Array.apply(null, {length: pages-1}).map(Number.call, Number);
    let handleClick = e => {
        let foo = document.querySelectorAll("a");

        for (let i = 0; i < foo.length; i++) {
            foo[i].classList.remove("active");
        }

        e.currentTarget.classList.add("active");
    };

    return (
        <div className="nav_pages">
            <ul>
                <li onClick={() => store.load(0)}>
                    <a className={"active"}  onClick={handleClick}>{1}</a>
                </li>
                {pagesArray.map(item =>
                    <li key={item} onClick={() => store.load(item+1)}>
                        <a  onClick={handleClick}>{item+2}</a>
                    </li>
                )}
            </ul>
        </div>
    );
}



export default React.memo(Pages);