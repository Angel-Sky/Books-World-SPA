import { errorHandler, getUserData } from '../helpers.js'

export function create() {
    const { title, author, description, genre, pages, imageUrl } = this.params;
    const url = baseUrl + `.json?auth=${getUserData().idToken}`
    console.log(url)
    const obj = { title, author, description, genre, pages, imageUrl, creator: getUserData().localId, 'likes': [getUserData().email], 'comments': ['No comments yet.'],};

    //Validation
    if (title.length < 6) {
        const error = { message: "Title should be at least 6 characters long!" };
        errorHandler(error);
        return;
    }
    if (description.length < 6) {
        const error = { message: "The description should be at least 10 characters long"};
        errorHandler(error);
        return;
    }

    if (description.length < 6) {
        const error = { message: "The description should be at least 10 characters long"};
        errorHandler(error);
        return;
    }
    let startOfUrl = imageUrl.substring(0, 8);
    
    if (startOfUrl.includes("https://") || startOfUrl.includes("http://")) {
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(() => { this.redirect('/') })
            .catch(errorHandler)
    
    } else {
        const error = { message: "The image should start with \"http://\" or \"https://\"."};
        errorHandler(error);
    }

    
}