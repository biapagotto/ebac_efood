import React from 'react'
import { ButtonContainer, ButtonLink } from './styles'

type ButtonProps = {
  width?: string
  height?: string
  backgroundColor?: string
  color?: string
  marginLeft?: string
  marginTop?: string
  type?: 'button' | 'submit' | 'reset'
  title?: string
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  onClick,
  marginLeft = '0px',
  marginTop,
  variant = 'primary',
  ...props
}) => {
  if (props.href) {
    return (
      <ButtonLink
        href={props.href}
        title={props.title}
        marginLeft={marginLeft}
        marginTop={marginTop}
        variant={variant}
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
      marginTop={marginTop}
      variant={variant}
      {...props}
    >
      {children}
    </ButtonContainer>
  )
}

export { ButtonLink }
