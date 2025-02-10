import React from "react";
import { v4 as uuid } from "uuid";

export const TaskAddInput = ({
  inputText,
  setInputText,
  setTaskList,
  taskList,
}) => {
  const handleSubmit = (e) => {
    // uuidでユニークなIDを生成する
    const taskId = uuid();
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    // カードを追加する
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`, // string
        text: inputText,
      },
    ]);
    // 入力欄を空にする
    setInputText("");
  };

  const handleChange = (e) => {
    // 文字を入力する度にinputTextを更新する
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};
