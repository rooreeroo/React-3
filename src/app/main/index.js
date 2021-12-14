import React, {useCallback, useEffect} from "react";
import Item from "../../components/item";
import Layout from "../../components/layout";
import BasketSimple from "../../components/basket-simple";
import List from "../../components/list";
import useStore from "../../utils/use-store";
import useSelector from "../../utils/use-selector";
import Pages from "../../components/nav-pages";

function Main() {

  const select = useSelector(state => ({
    items: state.catalog.items,
    pages: state.catalog.pages,
    amount: state.basket.amount,
    sum: state.basket.sum
  }));


  // Загрузка тестовых данных при первом рендере
  useEffect(async () => {
    await store.catalog.load();
  }, []);

  const store = useStore();

  const callbacks = {
    addToBasket: useCallback((_id) => store.basket.add(_id), [store]),
    openModal: useCallback(() => store.modals.open('basket'), [store]),
    getId: useCallback((id) => store.profile.itemPage(id), [store])
  }

  const renders = {
    item: useCallback(item => {
      return <Item itemPage={store.itemProfile} item={item} getId={callbacks.getId} onAdd={callbacks.addToBasket}/>
    }, [callbacks.addToBasket]),
  }

  return (
    <Layout head={<h1>Магазин</h1>}>
      <BasketSimple onOpen={callbacks.openModal} amount={select.amount} sum={select.sum}/>

      <List  items={select.items} renderItem={renders.item} />
      <Pages store={store.catalog} pages={select.pages}/>

    </Layout>
  );
}

export default React.memo(Main);
