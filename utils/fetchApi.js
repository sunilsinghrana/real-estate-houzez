import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
                'X-RapidAPI-Key': '84dff83060msh04f34aedbd47d61p10d141jsn8c5fc619c831',
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
              }
    })

    return data
}