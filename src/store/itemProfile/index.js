import StoreModule from "../module";
class CatalogStore extends StoreModule {



    /**
     * Начальное состояние
     */
    initState() {
        return {
            item: null
        }
    }

    /**
     * Загрузка информации о товаре
     */

    async itemPage(id) {
        const response = await fetch(`/api/v1/articles/${id}?fields=*,maidIn(title,code),category(title)`);
        const json = await response.json();
        this.setState({
            item: json.result
        });

    };
    clear = () => {
        this.setState({
            item: null
        })
    }


}

export default CatalogStore;