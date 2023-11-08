import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { todo } from '../todo';
import { TodoCrudService } from '../todo-crud.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent  implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) {
    console.log('inside 1');
   }

  ngOnInit() {}

  openBottomSheet(): void {
    this.bottomSheet.open(AddTaskBottomSheet);
  }
  
}

@Component({
  selector: 'add-task-bottom-sheet',
  templateUrl: 'add-task-bottom-sheet.html',
  styleUrls: ['./add-task.component.scss'],
})

export class AddTaskBottomSheet {
  
  constructor(private bottomSheetRef: MatBottomSheetRef<AddTaskBottomSheet>,private todoServ:TodoCrudService) {
    console.log('inside 2');
  } 
    
  Create(a: any,b: any) {
    console.log('Name', a.value);
    console.log('Desc', b.value);

    let newTodo: todo = {
      name : a.value,
      description : b.value,
      date : new Date(),
      complete : false
    };
    console.log('newTodo from addtask', newTodo);


    this.todoServ.createTodo(newTodo);
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
