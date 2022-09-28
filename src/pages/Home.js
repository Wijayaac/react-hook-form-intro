import axios from 'axios'
import React, { useEffect, useState } from 'react'

const API_URL = process.env.REACT_APP_API_URL

function Home () {
    const [students, setStudents] = useState([])

    useEffect(() => {
        const getStudents = async () => {
            let { data } = await axios.get(`${API_URL}/students`)
            setStudents(data)
        }
        getStudents()
    }, [students.length])

    return (
        <>
            <div className="grid">
                {students.length > 0 && students.map((student) => (
                    <div className="card" key={student.id}>
                        <p className="name">{student.name}</p>
                        <p className="age">{student.age}</p>
                        <p className="description">{student.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home
