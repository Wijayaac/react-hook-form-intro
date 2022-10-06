import axios from "axios"

import { getStudents } from './StudentLists.handler'


jest.mock('axios')

// const { getStudents } = handler
const API_URL = process.env.REACT_APP_API_URL

describe('StudentListsHandler', () => {
    describe('#getStudentLists', () => {
        it('should call axios.get with correct url and call setStudent param with response data when invoked', async () => {
            const mockSetStudentList = jest.fn()
            const mockSetIsloading = jest.fn()
            const data = [{
                "name": "Wijaya",
                "age": "21",
                "description": "312312",
                "id": 1
            }]
            axios.get.mockResolvedValue({ data })

            await getStudents(mockSetStudentList, mockSetIsloading)

            expect(axios.get).toBeCalledWith(`${API_URL}/students`)
            expect(mockSetStudentList).toBeCalledWith(data)
            expect(mockSetIsloading).toBeCalledWith(false)
        })
    })
})