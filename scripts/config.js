var firebaseConfig = {
    apiKey: "AIzaSyAAxUpaqWsXpTszsm8L73wYq1TyCKQoUyE",
    authDomain: "books-library-project.firebaseapp.com",
    projectId: "books-library-project",
    storageBucket: "books-library-project.appspot.com",
    messagingSenderId: "684466495133",
    appId: "1:684466495133:web:01c06048063ca8489a3e74"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const baseUrl =  'https://books-library-project-default-rtdb.europe-west1.firebasedatabase.app/books';

function changeContext(context) {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        context.isLoggedIn = true;
        context.email = user.email;
        context.userId = user.localId;
    } else {
        context.isLoggedIn = false;
    }
}
