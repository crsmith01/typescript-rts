import React from "react";

const EventComponent: React.FC = () => {
    // moused over onChange property of input element to see what type of event it is
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    const onDragStart = (event: React.DragEvent<HTMLDivElement> ) => {
        console.log('I am being dragged')
    }
    
    return <div>
        {/* <input onChange={(e) => console.log(e)} /> */}
        <input onChange={onChange} />
        <div draggable onDragStart={onDragStart}>Drag Me!</div>
    </div>

}

export default EventComponent;