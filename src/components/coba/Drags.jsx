import React from 'react'
import Input from "./Input";
import Boards from "./Boards";
import { TaskProvider } from "./Hoosk";

const Drags = () => {
    return (
        <div className="overflow-y-scroll h-screen">
            <div className="layout pt-8">
                <div className="max-w-[26rem] mx-auto">
                    <TaskProvider>
                        <Input />
                        <Boards />
                    </TaskProvider>
                </div>
            </div>
        </div>
    )
}

export default Drags