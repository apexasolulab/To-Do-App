import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


function AddTaskModal({ open, onClose, onAdd }) {
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("medium");


  const handleSubmit = () => {
    if (!taskText.trim()) return;

    onAdd(taskText, priority);   // send to Board
    setTaskText("");
setPriority("medium");
onClose();       // close modal
  };

  return (
  <Dialog open={open} onOpenChange={(value) => !value && onClose()}>


    <DialogContent>
      <DialogHeader>
  <DialogTitle>Add New Task</DialogTitle>
  <DialogDescription>
    Enter task details and select a priority.
  </DialogDescription>
</DialogHeader>


      <Input
        placeholder="Enter task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="mb-4"
      />
      <div className="mb-4">
  <p className="text-sm font-medium mb-2">Priority</p>

  <div className="flex gap-2">
    {["high", "medium", "low"].map((level) => (
      <button
        key={level}
        onClick={() => setPriority(level)}
        className={`px-3 py-1 rounded-full text-sm border transition
          ${
            priority === level
              ? level === "high"
                ? "bg-red-500 text-white border-red-500"
                : level === "medium"
                ? "bg-yellow-500 text-white border-yellow-500"
                : "bg-green-500 text-white border-green-500"
              : "bg-white text-gray-600 border-gray-300"
          }`}
      >
        {level.charAt(0).toUpperCase() + level.slice(1)}
      </button>
    ))}
  </div>
</div>


      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>

        <Button onClick={handleSubmit}>
          Add Task
        </Button>
      </div>
    </DialogContent>
  </Dialog>
);

}

export default AddTaskModal;
