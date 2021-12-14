import React from 'react';
import propTypes from 'prop-types';
import './styles.css';
import numberFormat from "../../utils/number-format";

function ItemPage({item, onAdd}) {
    return (
        <div className='ItemPage'>
            <div className="description">
                {item.description}
            </div>
            <div className="maidIn">
                {console.log('ITEM',item.maidIn)}
                {item.maidIn &&<div>Страна производитель: <span>{' ' + item.maidIn.title + ' ' + '(' + item.maidIn.code + ')'}</span></div> }

            </div>
            <div className="category">
                Категория:<span>{' ' + (item.category && item.category.title)}</span>
            </div>

            <div className='ItemPage__price'><span>Цена: </span><span>{numberFormat(item.price)} ₽</span></div>
            <button onClick={() => onAdd(item._id)}>Добавить</button>

        </div>
    )
}

ItemPage.defaultProps = {
    onAdd: () => {}
}

export default React.memo(ItemPage);