import StoreModule from "../module";
class CatalogStore extends StoreModule {



  /**
   * Начальное состояние
   */
  initState() {
    return {
      items: [],
      pages: 0
    };
  }

  /**
   * Загрузка списка товаров
   */
  load = async (num) => {
    const response = await fetch(`/api/v1/articles?limit=${10}&skip=${num*10}&lang=ru&fields=items(*),count`);
    const json = await response.json();
    this.setState({
      items: json.result.items,
      pages: json.result.count/10                   //page = count/limit
    });
  };


}

export default CatalogStore;
