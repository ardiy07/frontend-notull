import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Route } from "../configs";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import React, { useState } from 'react'



function App() {
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  )
}

export default App;
