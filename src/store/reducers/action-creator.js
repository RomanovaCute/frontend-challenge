import { catsSlice } from "./cats-slice"
import axios from "axios"


export const loadCats = () => async (dispatch) => {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=15&api_key=live_4VVcF3Ksv6cnh9sr20XzZvgGwt9Wic95IO3SjjYoLdOcUFV1Q9M2Dr2lUZz13uZ1`)
    dispatch(catsSlice.actions.fetchingSuccess(response.data))
}