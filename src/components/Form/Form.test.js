import { screen, render, fireEvent } from "@testing-library/react"
import { act } from "react-dom/test-utils"

import Form from "."

import { AddHandler } from './Form.handler'

jest.mock('./Form.handler.js', () => ({ AddHandler: jest.fn() }))

describe('#Add Student Form', () => {

    describe('#render', () => {
        it('should render form componen when invoked', () => {
            render(<Form />)

            const nameLabel = screen.getByText(/Input Name/)
            const ageLabel = screen.getByText(/Age/)
            const bioLabel = screen.getByText(/Short bio/)
            const inputName = screen.getByRole('textbox', { name: /name/ })
            const inputAge = screen.getByRole('spinbutton', { name: /age/ })
            const inputBio = screen.getByRole('textbox', { name: /description/ })


            expect(nameLabel).toBeInTheDocument()
            expect(ageLabel).toBeInTheDocument()
            expect(bioLabel).toBeInTheDocument()
            expect(inputName).toBeInTheDocument()
            expect(inputAge).toBeInTheDocument()
            expect(inputBio).toBeInTheDocument()
        })
    })

    describe('#submit', () => {

        it('should trigger submit handler on form submit', async () => {
            render(<Form />)

            const inputName = screen.getByRole('textbox', { name: 'name' })
            const inputAge = screen.getByRole('spinbutton', { name: 'age' })
            const inputBio = screen.getByRole('textbox', { name: 'description' })
            const submitButton = screen.getByRole('button', { name: 'addStudent' })


            fireEvent.change(inputName, {
                target: {
                    value: 'Nama saya'
                }
            })
            fireEvent.change(inputAge, {
                target: {
                    value: 21
                }
            })
            fireEvent.change(inputBio, {
                target: {
                    value: 'Testing mock'
                }
            })

            await act(() => {
                fireEvent.click(submitButton)
            })

            expect(AddHandler).toBeCalledWith({
                name: 'Nama saya',
                age: '21',
                description: 'Testing mock'
            })
        })
        it('should showing error message on form submit', async () => {
            render(<Form />)
            const submitButton = screen.getByRole('button', { name: 'addStudent' })

            await act(() => {
                fireEvent.click(submitButton)
            })

            const errorMessages = screen.getAllByText('required field')

            expect(errorMessages).toHaveLength(3)
        })

    })
})
