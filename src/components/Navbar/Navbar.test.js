import { screen, render, fireEvent } from "@testing-library/react"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"

import Navbar from '.'

describe('Navbar', () => {
    it('should navigate to add student page when Add Menu is clicked', () => {
        const history = createMemoryHistory({ initialEntries: ['/'] })
        render(<Router location={history.location} navigator={history}>
            <Navbar />
        </Router>)
        const addMenu = screen.getByText(/Add/)

        expect(history.location.pathname).toBe('/')
        fireEvent.click(addMenu)
        expect(history.location.pathname).toBe('/add-student')

    })
    it('should navigate to home page when Home Menu is clicked', () => {
        const history = createMemoryHistory({ initialEntries: ['/add-student'] })
        render(<Router location={history.location} navigator={history} >
            <Navbar />
        </Router>)
        const homeMenu = screen.getByText(/Home/)

        expect(history.location.pathname).toBe('/add-student')
        fireEvent.click(homeMenu)
        expect(history.location.pathname).toBe('/')

    })
})
