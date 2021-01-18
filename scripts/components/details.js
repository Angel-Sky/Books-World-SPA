import { getSpecificData, loadPage, errorHandler, getUserData } from '../helpers.js';

export function details() {
    const { id } = this.params;
    getSpecificData(id)
        .then(res => {
            if (getUserData()) {
                let creatorId = getUserData().localId ? getUserData().localId : null;
               
                if (res.creator === creatorId) {
                    this.isCreator = true;
                }
            }
            this.book = { id, ...res }
            console.log(res)
            this.book.likesLength = res.likes.length - 1;
            changeContext(this)
            loadPage.call(this, 'detailsPage');
        })
      .catch(errorHandler)
}