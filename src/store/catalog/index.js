import StoreModule from "../module";
class CatalogStore extends StoreModule {



  /**
   * Начальное состояние
   */
  initState() {
    return {
      items: [],
      pages: 0,
      page: 1,
      limit: 10
    };
  }
  /**
   * Загрузка списка товаров
   */
  load = async (num, limit) => {
    const response = await fetch(`/api/v1/articles?limit=${limit}&skip=${num*limit}&lang=ru&fields=items(*),count`);
    const json = await response.json();
    this.setState({
      items: json.result.items,
      pages: json.result.count,
      page: num,
      limit: limit
    });
  };


}

export default CatalogStore;
