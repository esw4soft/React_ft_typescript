import React from 'react'

type ButtonProps = {
    text: string
    size: 'small' | 'large'
}

const defaultProps: ButtonProps = {
    text: '預設',
    size: 'small'
}

const Button = (props: ButtonProps) => {
    const text = props.text || '預設'
    return (
        <button type="button">{props.text}</button>
    )
}

Button.defaultProps = defaultProps

export default Button