import axios from 'axios';

export function fetchPost() {
    return function (dispatch) {
    dispatch(getPost());
    axios.get("https://rickandmortyapi.com/api/character")
        .then(r => r.data)
        .then(d => dispatch(receivePost(d)))
        .catch(e => console.log(e));
    }
}