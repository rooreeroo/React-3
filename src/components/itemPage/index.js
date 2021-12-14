import React from 'react';
import propTypes from 'prop-types';
import './styles.css';
import numberFormat from "../../utils/number-format";

function ItemPage({item, onAdd}) {
    return (
        <div className='Item'>
            <div className="description">
                {item.description}
            </div>
            <div className="madeIn">
                {
                    console.log(item)
                }
            </div>
            <div className='Item__right'>
                <div className='Item__price'>{numberFormat(item.price)} ₽</div>
                <button onClick={() => onAdd(item._id)}>Добавить</button>
            </div>
        </div>
    )
}

ItemPage.defaultProps = {
    onAdd: () => {}
}

export default React.memo(ItemPage);