import { render, screen } from '@testing-library/react'
import App from './App'

test('renders hero section', () => {
  render(<App />)
  const heroElement = screen.getByRole('heading', {
    name: /Viva experiências gastronômicas no conforto da sua casa/i
  })
  expect(heroElement).toBeInTheDocument()
})
