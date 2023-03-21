import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { useTask } from "../../../hooks/useTaks"
import { CardBody } from '../../atoms'

const Boards = () => {
    const { setIsDragging, updateTask, deleteTask } = useTask();

    const handleDragEnd = (result) => {
        setIsDragging(false);
        const { destination, source } = result;
        if (destination.droppableId === "delete") {
            deleteTask(source);
        } else {
            updateTask(destination, source);
        }
    };
    return (
        <DragDropContext onDragEnd={handleDragEnd} onDragStart={() => setIsDragging(true)}>
            <CardBody statusType='todolist' />
            <CardBody statusType='ongoing' />
            <CardBody statusType='review' />
            <CardBody statusType='completed' />
        </DragDropContext>
    )
}

export default Boards