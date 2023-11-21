import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import "./App.css";

export const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const fistRender = useRef(true);

  const [editTask, setEditTask] = useState({
    enabled: false,
    task: "",
  });
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("@cursoreact");
    if (tarefasSalvas) {
      setTasks(JSON.parse(tarefasSalvas));
    }
  }, []);

  useEffect(() => {
    if (fistRender.current) {
      fistRender.current = false;
      return;
    }
    localStorage.setItem("@cursoreact", JSON.stringify(tasks));
  }, [tasks]);

  const handlerRegistes = useCallback(() => {
    if (!input) {
      alert("preencha o nome da sua tarefa!");
      return;
    }

    if (editTask.enabled) {
      handleSaveEdit();
      return;
    }

    setTasks((tarefas) => [...tarefas, input]);
    setInput("");

  }, [input,tasks]);

  const handleSaveEdit = () => {
    const findIndexTask = tasks.findIndex((task) => task === editTask.task);

    const allTasks = [...tasks];

    allTasks[findIndexTask] = input;
    setTasks(allTasks);

    setEditTask({
      enabled: false,
      task: "",
    });
    setInput("");
  };

  const handleDelete = (item: string) => {
    const removeTask = tasks.filter((task) => task !== item);
    setTasks(removeTask);
  };

  const handleEdit = (item: string) => {
    inputRef.current?.focus();
    setInput(item);
    setEditTask({
      enabled: true,
      task: item,
    });
  };

  const totalTarefas = useMemo(() => {
    return tasks.length;
  }, [tasks]);

  return (
    <>
      <h1>Lista de tarefas</h1>
      <input
        type="text"
        placeholder="Digite o nome da tarefa..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      <button onClick={handlerRegistes}>
        {editTask.enabled ? "Atualizar tarefa" : "adicionar tarefa"}
      </button>
      <hr />
      <strong>Você tem {totalTarefas} tarefas</strong>

      {tasks.map((item, index) => (
        <section key={item}>
          <span> {item} </span>
          <button onClick={() => handleEdit(item)}>Editar</button>
          <button onClick={() => handleDelete(item)}>Excluir</button>
        </section>
      ))}
    </>
  );
};
export default App;
