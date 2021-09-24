import React, { FunctionComponent } from 'react'

export const Button: FunctionComponent = ({ children }) => {
    return (
        <button type="button">
            {children}
        </button>
    )
}
