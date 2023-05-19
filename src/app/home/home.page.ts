import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../Models/task'
import { DialogService } from '../services/dialog.service';
import { AlertController } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  TweetId: number = 0;
  taskList: Task[] = [];
  Completed: boolean = false;
  taskTitle: string | undefined;

  constructor(private taskService: TaskService, private dialogService : DialogService, private alertController: AlertController, private changeDetectorRef: ChangeDetectorRef) {
    this.taskList = [];
  }

  ngOnInit():void {
    this.taskService.GetAllTasks().subscribe(task => {
      console.log(task);
      this.taskList = task;
    })
  }

   async openTaskDialog() {
    const alert = await this.alertController.create({
      header: 'Create New Task',
      inputs: [
        {
          name: 'taskTitle',
          type: 'text',
          placeholder: 'Enter task title'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Create',
          handler: (data) => {
            if (data.taskTitle) {
              const newTask: Task = {
                title: data.taskTitle,
                taskId: 0,
                completed: false
              };
              
              this.taskService.CreateNewTask(newTask).subscribe(
                () => {
                  console.log('Task created successfully');
                  this.taskList.push(newTask);
                },
                (error) => {
                  console.error('Failed to create task:', error);
                }
              );
            }
          }
        }
      ]
    });
  
    await alert.present();
  }



  updateTaskStatus(taskId: number, task: any) {
    task.completed = !task.completed; // Toggle the completed status

    this.taskService.UpdateTask(taskId, task).subscribe(
      (response) => {
        console.log('Task updated successfully:', response);
         this.taskList = this.taskList.map((t) => {
        if (t.taskId === taskId) {
          t.completed = task.completed;
        }
        return t;
      });
      // Trigger change detection to update the UI
      this.changeDetectorRef.detectChanges();
    },
      (error) => {
        console.error('Error updating task:', error);
        // Handle error condition, such as displaying an error message
      }
    );
  }



  deleteTask(taskId: number){
    this.taskService.DeleteTaskById(taskId).subscribe(
      (response) => {
        console.log('Task updated deleted:', response);
        this.taskList = this.taskList.filter(task => task.taskId !== taskId);
      },
      (error) => {
        console.error('Error deleting task:', error);
      }
    )
  }


  
}
