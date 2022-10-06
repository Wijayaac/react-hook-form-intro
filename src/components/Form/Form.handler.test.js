import axios from "axios"

jest.mock('axios')

import { AddHandler } from './Form.handler'
const API_URL = process.env.REACT_APP_API_URL

describe('Form Handler', () => {
    describe('#AddStudentHandler', () => {
        it('should call axios.post with correct url with data param when invoked', async () => {
            const data = {
                name: 'Test',
                age: '22',
                description: 'Testing'
            }

            await AddHandler(data)

            expect(axios.post).toBeCalledWith(`${API_URL}/students`, data)
        })
    })
})