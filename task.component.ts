import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task',
  imports: [CommonModule,FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
tasks: any;
tasklist: TemplateRef<NgIfContext<boolean>>|null;
   constructor(private taskservice:TaskService){}
  newTask:Task={description:" ",completed:false}
     createTask():void{
      this.taskservice.createTask(this.newTask).subscribe((createdtask)=>{this.newTask={description:" ",completed:false};})
     }
   }

