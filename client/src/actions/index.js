import axios from 'axios'
import { FETCH_USER } from './types'

// "async/await" promise format
export const fetchUser = (dispatch) => async dispatch => {
    const  res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data })
}

// ".then" promise format
// export const fetchUser = (dispatch) => {
//     return function(dispatch) {
//         axios.get('/api/current_user')
//             .then(res => dispatch({ type: FETCH_USER, payload: res }))
//     }
// }

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data });
}