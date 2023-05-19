import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss'],
})
export class TaskDialogComponent  implements OnInit {

  // Add any necessary properties for capturing user input
  taskTitle: string | undefined;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  // dismiss() {
  //   // Dismiss the modal without returning any data
  //   this.modalController.dismiss();
  // }

  // saveTask() {
  //   // Save the task and return the data to the caller
  //   const data = {
  //     title: this.taskTitle
  //   };
  //   this.modalController.dismiss(data);
  // }


}
