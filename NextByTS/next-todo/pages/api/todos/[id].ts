import { NextApiRequest, NextApiResponse } from "next";
import Data from "../../../lib/data";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PATCH") {
    try {
      // 📁pages/api/todos/[id].ts
      // curl --request PATCH http://localhost:3000/api/todos/1
      // req.query >>> { id: '1' }
      const todoId = Number(req.query.id);
      const todo = Data.todo.exist({ id: todoId });
      if (!todo) {
        res.statusCode = 404;
        res.end();
      }

      const todos = Data.todo.getList();
      const changedTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      Data.todo.write(changedTodos);
      res.statusCode = 200;
      res.end();
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }
  if (req.method === "DELETE") {
    try {
      const todoId = Number(req.query.id);
      const todo = Data.todo.exist({ id: todoId });
      if (!todo) {
        res.statusCode = 404;
        res.end();
      }

      const todos = Data.todo.getList();
      const filteredTodos = todos.filter((todo) => todo.id !== todoId);
      Data.todo.write(filteredTodos);
      res.statusCode = 200;
      res.end();
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }
  res.statusCode = 405;
  return res.end();
};
