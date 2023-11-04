import React from "react"

interface ChildProps {
    color: string
}

// export const Child = (props: ChildProps) => { 
// usally we don't use all props, so we use destructuring instead
export const Child = ({ color }: ChildProps) => {
    return <div>{color}</div>
}
