import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StudentCard from '../components/Cards/StudentCard'
import Loader from '../components/Loader'

const API_URL = process.env.REACT_APP_API_URL

function Home () {
    const [students, setStudents] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const getStudents = async () => {
            try {
                let { data } = await axios.get(`${API_URL}/students`)
                setStudents(data)
                setIsLoading(false)

            } catch (error) {
                setIsLoading(false)
                console.log(error)
            }
        }
        getStudents()
    }, [students.length])

    return (
        <>
            <div className="home-page">
                {isLoading && <Loader />}
                <div className="grid">
                    {students.length > 0 && students.map((student) => (
                        <StudentCard key={student.id} student={student} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home
