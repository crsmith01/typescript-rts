import React from "react"

interface ChildProps {
    color: string
    onClick: () => void // no arguments and don't expect to get back a usable value
    children?: React.ReactNode // children is a special prop that is built into React
}

// export const Child = (props: ChildProps) => { 
// usally we don't use all props, so we use destructuring instead

// Approach 1
export const Child = ({ color, onClick }: ChildProps) => {
    return <div>
        {color}
        <button onClick={onClick}>Click me!</button>
        </div>
}

// Approach 2
// use this approach if you want to make use of inherent React component props
// .FC stands for FunctionComponent (usually just use FC)
export const ChildAsFC : React.FC<ChildProps> = ({ color, onClick, children }) => {
    return <div>
        {color}
        {children}
        <button onClick={onClick}>Click me!</button>
    </div>}
