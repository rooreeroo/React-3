import React, {useCallback, useEffect} from "react";
import Layout from "../../components/layout";
import BasketSimple from "../../components/basket-simple";
import useStore from "../../utils/use-store";
import useSelector from "../../utils/use-selector";
import ItemPage from "../../components/itemPage";
import {useParams} from 'react-router-dom';

function Profile() {
    const store = useStore();
    const {id} = useParams();
    const select = useSelector(state => ({
        item: state.itemProfile.item,
        amount: state.basket.amount,
        sum: state.basket.sum
    }));
    useEffect(() => {
        store.modals.name && store.modals.close();
        (!select.item || select.item._id !== id) && store.itemProfile.itemPage(id);

    });





    const callbacks = {
        openModal: useCallback(() => store.modals.open('basket'), [store]),
        addToBasket: useCallback((_id) => store.basket.add(_id), [store])
    }



    return (
        <Layout head={<h1>{select.item && select.item.name}</h1>}>
            <BasketSimple onOpen={callbacks.openModal} amount={select.amount} sum={select.sum}/>
            {select.item && <ItemPage item={select.item} onAdd={callbacks.addToBasket} />}


        </Layout>
    );
}

export default React.memo(Profile);
