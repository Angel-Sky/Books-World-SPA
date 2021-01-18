import { getSpecificData, loadPage, errorHandler, getUserData } from '../helpers.js';

export function loadEditFormWithInfo() {
    const { id } = this.params;
    getSpecificData(id)
        .then(res => {
            this.book = { id, ...res };
            changeContext(this)
            loadPage.call(this, 'editPage');
        });
}

export function editPost() {
    const { id, title, author, description, genre, pages, imageUrl } = this.params;
    //TO DO 
    const newData = { title, author, description, genre, pages, imageUrl };
    let url = baseUrl + '/' + id + '.json' + `?auth=${getUserData().idToken}`;
    
    fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(newData)
    }).then(() => this.redirect('/'))
        .catch(errorHandler)
}
