import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL

export const getStudents = async (setStudents) => {
    try {
        let { data } = await axios.get(`${API_URL}/students`)
        setStudents(data)
    } catch (error) {
        console.log(error)
    }
}

