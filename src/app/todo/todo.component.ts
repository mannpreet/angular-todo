import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  @Input() heading: string = '';
  @Output() addTodo = new EventEmitter<string>();
  @Input() updatedTodoContent = [];

  constructor() { }

  ngOnInit(): void {
  }
  addNewTodo(value: string) {
    console.log('ArrayChild: ', value);
    if(value !== '') {
      this.addTodo.emit(value);
    }
  }
}
