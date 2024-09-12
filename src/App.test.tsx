import { render, screen } from '@testing-library/react'
import App from './App'

test('renders efood hero text', () => {
  render(<App />)
  const heroText = screen.getByText(
    /Viva experiências gastronômicas no conforto da sua casa/i
  )
  expect(heroText).toBeInTheDocument()
})
