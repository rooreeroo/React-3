import React, {useCallback, useEffect} from "react";
import Layout from "../../components/layout";
import BasketSimple from "../../components/basket-simple";
import useStore from "../../utils/use-store";
import useSelector from "../../utils/use-selector";
import ItemPage from "../../components/itemPage";

function Profile() {

    const select = useSelector(state => ({
        item: state.itemProfile.item,
        amount: state.basket.amount,
        sum: state.basket.sum
    }));
    const madeIn = select.item.madeIn

    const store = useStore();

    const callbacks = {
        addToBasket: useCallback((_id) => store.basket.add(_id), [store])
    }
    console.log('item', select.item)


    return (
        <Layout head={<h1>{select.item.name}</h1>}>
            <BasketSimple onOpen={callbacks.openModal} amount={select.amount} sum={select.sum}/>
            <ItemPage item={select.item} onAdd={callbacks.addToBasket} />

        </Layout>
    );
}

export default React.memo(Profile);
