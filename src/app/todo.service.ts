import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private taskId=3
  TodoList=[
    {id:1,'task':"Task1"},
    {id:2,'task':"Task2"}
  ]

  constructor() { }
  addTodo(taskName:string){
    this.TodoList.push({"id":this.taskId++,"task":taskName})
  }

  deleteTodo(index:number){
    this.TodoList.splice(index,1)
  }
}
