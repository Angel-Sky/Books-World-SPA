import { getAllData, loadPage, mapCategories, errorHandler } from '../helpers.js'

export function home() {
    getAllData()
        .then(res => {
            this.books = Object.entries(res)
                .map(([id, data]) => { return { id, ...data } })
            changeContext(this);
            loadPage.call(this, 'homePage');
        }).catch((err) => {
            changeContext(this);
            loadPage.call(this, 'homePage');
            errorHandler(err);
        })

}

export function search() {
    const { searchedWord } = this.params;
    getAllData()
        .then(res => {
            this.books = Object.entries(res)
                .map(([id, data]) => { return { id, ...data } })
                .filter(x => x.title.toLowerCase().includes(searchedWord.toLowerCase()) ||
                             x.author.toLowerCase().includes(searchedWord.toLowerCase()) ||
                             x.genre.toLowerCase().includes(searchedWord.toLowerCase()));
            changeContext(this);
            loadPage.call(this, 'homePage');
        }).catch(errorHandler);
}