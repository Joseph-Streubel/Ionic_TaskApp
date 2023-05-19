import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dialog } from '@capacitor/dialog';
import { ModalController } from '@ionic/angular';
import { Observable, from } from 'rxjs';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskService } from '../services/task.service'

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  taskList: Task[] = []
  

  constructor(
    private http: HttpClient,
    private modalController: ModalController,
    private taskService: TaskService
  ) {}

  

  // async openTaskDialog(): Promise<void> {
  //   const modal = await this.modalController.create({
  //     component: TaskDialogComponent, // Replace with your task dialog component
  //     componentProps: {}
  //   });

  //   await modal.present();

  //   const { data } = await modal.onWillDismiss();
  //   console.log("data: " + data.title);

  //   if (data && data.title) {
  //     try {
  //       await this.taskService.CreateNewTask(data.title).toPromise();
  //       console.log('Task created successfully');
  //       this.taskList.push(data); // Assuming `data` is the created task object
  //     } catch (error) {
  //       console.error('Failed to create task:', error);
  //     }
  //   }

  // private createTask(title: string): Observable<void> {
  //   const newTask = { title, completed: false }; // Assuming completed is initially set to false
  //   return this.http.post<void>('/api/tasks', newTask);
  // }
}

