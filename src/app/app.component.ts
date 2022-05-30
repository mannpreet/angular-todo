import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todos';
  //todoArr: any = [];
  updatedTodo:any= [];
  updatedTask: any;
  newTodoAfterDelete:any= [];  
  arrId: any = [];
  getMax: number | undefined;
  todos: Todo[] = [
    new Todo(1, 'learn Angular'),
    new Todo(2, 'React')
  ];
  updateArr: any = [];
  idExist = null;

  receiveTodo(val: string) {    
    console.log('Array: ', this.todos);
    this.todos.forEach(ob => {
      this.arrId.push(ob.id);
    });
    this.getMax = Math.max(...this.arrId);
    this.updateArr = this.todos.filter(ob => ob.id === this.idExist);
    if(this.updateArr.length) {
      this.updateArr[0].task = val;
    } else {
      this.todos.push(new Todo((this.getMax) + 1, val));
    }
    this.idExist = null;
    

    //this.getId = this.todos?.sort((obj1,obj2) => obj1.id - obj2.id)?.[0].id
    //this.todoArr.push(val);
  }
  updateTodo(id: number, task:string) {
    this.updatedTodo = this.todos.filter(ob => ob.id === id);
    console.log(this.updatedTodo);
    this.updatedTask = this.updatedTodo[0].task;
    this.idExist = this.updatedTodo[0].id;
  }

  clearTodo(id: number, task:string) {
    this.newTodoAfterDelete = this.todos.filter(ob => ob.id !== id);
    console.log(this.newTodoAfterDelete);
    this.todos = this.newTodoAfterDelete;
    console.log("TODOS:",this.todos);
  }
}
