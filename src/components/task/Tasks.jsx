import React from "react";
import { Task } from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const reorder = (taskList, startIndex, endIndex) => {
  // ドラッグした要素をremove
  const remove = taskList.splice(startIndex, 1);
  // removeした要素をドロップ先に挿入する
  taskList.splice(endIndex, 0, remove[0]);
};

export const Tasks = ({ taskList, setTaskList }) => {
  const handleDragEnd = (result) => {
    // 並び替え
    reorder(taskList, result.source.index, result.destination.index);

    setTaskList(taskList);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
