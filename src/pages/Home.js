import React, { useEffect, useState } from 'react'

import StudentCard from '../components/Cards/StudentCard'
import Loader from '../components/Loader'
import { getStudents } from './StudentLists.handler'


function Home () {
    const [students, setStudents] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getStudents(setStudents, setIsLoading)
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
