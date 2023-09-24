import axios from "axios";

const instance =  axios.create({baseURL: "https://api.potterdb.com/" })

instance.defaults.headers.common['Authorization'] = ""

export default instance