import axios from 'axios'

export default()=>{
    return axios.create({baseURL: 'https://agile-journey-09538.herokuapp.com'})
}
