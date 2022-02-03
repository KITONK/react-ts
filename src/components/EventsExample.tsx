import React, { FC, useState, useRef } from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)
 
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('DROP')
    }

  return (
        <div>
            <input value={value} onChange={changeHandler} placeholder='Working'></input>
            <input ref={inputRef} placeholder='Not-working'></input>
            <button onClick={clickHandler}>Click</button>
            <div onDrag={dragHandler} draggable style={{width: '200px', height: '200px', background: 'blue'}}></div>
            <div 
                onDrop={dropHandler} 
                onDragLeave = {leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: '200px', height: '200px', background: isDrag ? 'yellow' : 'red', marginTop: '15px'}}></div>
        </div>
    );
};

export default EventsExample;
