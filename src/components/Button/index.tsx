import React from 'react'
import { ButtonContainer, ButtonLink } from './styles'

type ButtonProps = {
  width?: string
  height?: string
  backgroundColor?: string
  color?: string
  marginLeft?: string
  type?: 'button' | 'submit' | 'reset'
  title?: string
  href?: string
  onClick?: () => void
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  onClick,
  marginLeft = '8px',
  ...props
}) => {
  if (props.href) {
    return (
      <ButtonLink
        href={props.href}
        title={props.title}
        marginLeft={marginLeft}
        {...props}
      >
        {children}
      </ButtonLink>
    )
  }

  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
      marginLeft={marginLeft}
      {...props}
    >
      {children}
    </ButtonContainer>
  )
}

export { ButtonLink }
