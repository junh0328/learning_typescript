import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import pallete from '../../styles/pallete';
import { TodoType } from '../../types/todo';
import TrashCanIcon from '../../public/static/svg/trash_can.svg';
import CheckMarkIcon from '../../public/static/svg/check.svg';

interface IProps {
  todos: TodoType[];
}

const Container = styled.div`
  width: 100%;
  .todo-num {
    margin-left: 12px;
  }
  .todo-list-header {
    padding: 12px;
    position: relative;
    border-bottom: 1px solid ${pallete.gray};
    .todo-list-last-todo {
      font-size: 14px;
      margin: 0 0 8px;
      span {
        margin-left: 12px;
      }
    }
    .todo-list-header-colors {
      display: flex;
      .todo-list-header-color-num {
        display: flex;
        margin-right: 8px;
        p {
          font-size: 14px;
          line-height: 16px;
          margin: 0;
          margin-left: 6px;
        }
        .todo-list-header-round-color {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }
      }
    }
  }
  .bg-blue {
    background-color: ${pallete.blue};
  }
  .bg-green {
    background-color: ${pallete.green};
  }
  .bg-navy {
    background-color: ${pallete.navy};
  }
  .bg-orange {
    background-color: ${pallete.orange};
  }
  .bg-red {
    background-color: ${pallete.red};
  }
  .bg-yellow {
    background-color: ${pallete.yellow};
  }
  .todo-list {
    .todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 52px;
      border-bottom: 1px solid ${pallete.gray};
      .todo-left-side {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        .todo-color-block {
          width: 12px;
          height: 100%;
        }
        .checked-todo-text {
          color: ${pallete.gray};
          text-decoration: line-through;
        }
        .todo-text {
          margin-left: 12px;
          font-size: 16px;
        }
      }
      .todo-right-side {
        display: flex;
        align-items: center;
        margin-right: 12px;
        svg {
          &:first-child {
            margin-right: 16px;
          }
        }
        .todo-trash-can {
          width: 16px;
          path {
            fill: ${pallete.deep_red};
          }
        }
        .todo-check-mark {
          fill: ${pallete.deep_green};
        }
        .todo-button {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid ${pallete.gray};
          background-color: transparent;
          outline: none;
        }
      }
    }
  }
`;

const TodoList: React.FC<IProps> = ({ todos }) => {
  const getTodoColorNums = useCallback(() => {
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let green = 0;
    let blue = 0;
    let navy = 0;
    todos.forEach((todo) => {
      switch (todo.color) {
        case 'red':
          red += 1;
          break;
        case 'orange':
          orange += 1;
          break;
        case 'yellow':
          yellow += 1;
          break;
        case 'green':
          green += 1;
          break;
        case 'blue':
          blue += 1;
          break;
        case 'navy':
          navy += 1;
          break;
        default:
          break;
      }
    });

    return {
      red,
      orange,
      yellow,
      green,
      blue,
      navy,
    };
  }, [todos]);

  const todoColorNums = useMemo(getTodoColorNums, [todos]);

  console.log(todoColorNums, typeof todoColorNums.red);

  //* 객체의 문자열 인덱스 사용을 위한 타입
  type ObjectIndexType = {
    [key: string]: number | undefined;
  };

  //* 색깔 객체 구하기 2
  const todoColorNums2 = useMemo(() => {
    const colors: ObjectIndexType = {};
    todos.forEach((todo) => {
      const value = colors[todo.color];
      if (!value) {
        //* 존재하지않던 key라면
        colors[`${todo.color}`] = 1;
      } else {
        //* 존재하는 키라면
        colors[`${todo.color}`] = value + 1;
      }
    });
    return colors;
  }, [todos]);
  console.log(todoColorNums2);

  return (
    <Container>
      <div className="todo-list-header">
        <p className="todo-list-last-todo">
          남은 TODO<span>{todos.length}개</span>
        </p>
        <div className="todo-list-header-colors">
          {Object.keys(todoColorNums).map((color, index) => (
            <div className="todo-list-header-color-num" key={index}>
              <div className={`todo-list-header-round-color bg-${color}`} />
              {/* <p>{todoColorNums[color]}개</p> */}
            </div>
          ))}
        </div>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <div className="todo-left-side">
              <div className={`todo-color-block bg-${todo.color}`} />
              <p
                className={`todo-text ${
                  todo.checked ? 'checked-todo-text' : ''
                }`}
              >
                {todo.text}
              </p>
            </div>
            <div className="todo-right-side">
              {todo.checked && (
                <>
                  <TrashCanIcon
                    type="button"
                    className="todo-trash-can"
                    onClick={() => console.log('clicked')}
                  />
                  <CheckMarkIcon
                    type="button"
                    className="todo-check-mark"
                    onClick={() => console.log('clicked')}
                  />
                </>
              )}
              {!todo.checked && (
                <button
                  type="button"
                  className="todo-button"
                  onClick={() => console.log('clicked')}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
