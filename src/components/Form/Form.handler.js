
import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL

const AddHandler = async (data) => {
    try {
        await axios.post(`${API_URL}/students`, data)
    } catch (e) {
        console.log(e)
    }
}
export { AddHandler }