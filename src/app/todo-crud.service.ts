import { Injectable, inject } from '@angular/core';
import { todo } from './todo';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoCrudService {

  firestore: AngularFirestore = inject(AngularFirestore);

  constructor() { }

  createTodo(newtodo:todo){
    console.log('newTodo ', newtodo);
    const col = this.firestore.collection('/Todo').add({
      name : newtodo.name,
      description : newtodo.description,
      date : newtodo.date,
      complete : newtodo.complete
    });

    console.log('col', col);
  }

  getAllTodo(){
    return this.firestore.collection('/Todo').snapshotChanges();
  }

  editTodo(){}

  deleteTodo(){}

}
