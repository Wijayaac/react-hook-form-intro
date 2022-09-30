import React from 'react'

const StudentCard = (props) => {
  const { student } = props
  return (
    <div className="card">
      <p className="name">{student.name}</p>
      <p className="age">{student.age}</p>
      <p className="description">{student.description}</p>
    </div>
  )
}

export default StudentCard