import React from "react";
import { Draggable } from "@hello-pangea/dnd";

const TaskCard = React.memo(({ task, index, columnId, onEditTask, onDeleteTask }) => {
  console.log("Rendering task:", task.title);

  const [isEditing, setIsEditing] = React.useState(false);
const [editText, setEditText] = React.useState(task.title);

  React.useEffect(() => {
  setEditText(task.title);
}, [task.title]);

  

  const priorityCardStyles = {
  high: "bg-red-50 border-red-400",
medium: "bg-yellow-50 border-yellow-400",
low: "bg-green-50 border-green-400",

};


  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
  ref={provided.innerRef}
  {...provided.draggableProps}
  {...provided.dragHandleProps}
  className={`rounded-lg shadow-sm px-3 py-2 text-sm font-medium cursor-grab active:cursor-grabbing hover:shadow-lg transition border
  ${priorityCardStyles[task.priority || "low"]}
`}


>
  <div className="flex justify-between items-center">
  <div className="flex flex-col flex-1">

  {isEditing ? (
    <input
      className="border px-2 py-1 rounded w-full"
      value={editText}
      onChange={(e) => setEditText(e.target.value)}
      onBlur={() => {
        onEditTask(task.id, editText, columnId);
        setIsEditing(false);
      }}
      autoFocus
    />
  ) : (
    <div onDoubleClick={() => setIsEditing(true)}>
      {task.title}
    </div>
  )}
</div>


  <button
    onClick={() => onDeleteTask(task.id, columnId)}
    className="ml-2 text-red-500 hover:text-red-700"
  >
    ✕
  </button>
</div>


</div>

      )}
    </Draggable>
  );
});

export default TaskCard;
