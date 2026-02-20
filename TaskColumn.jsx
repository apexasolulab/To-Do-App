import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";

function TaskColumn({ title, tasks, columnId, onEditTask, onDeleteTask }) {
  
  const headerColors = {
  todo: "bg-blue-500",
  inProgress: "bg-yellow-500",
  done: "bg-green-500",
};
  return (
<div className={`w-[320px] flex-shrink-0`}>
  
  <div className="mb-3">
  <div className={`h-1 rounded-t-lg ${headerColors[columnId]}`}></div>
  <h2 className="text-sm font-semibold text-slate-700 px-1 mt-2">
    {title}
  </h2>
</div>


  <Droppable droppableId={columnId}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.droppableProps}
        className="bg-white rounded-xl p-3 min-h-[500px] space-y-3 shadow-md border border-slate-200"
      >
        {tasks.map((task, index) => (
  <TaskCard
    key={task.id}
    task={task}
    index={index}
    columnId={columnId}
    onEditTask={onEditTask}
    onDeleteTask={onDeleteTask}
  />
))}
    {provided.placeholder}
      </div>
    )}
  </Droppable>

</div>
  );
}

export default TaskColumn;
