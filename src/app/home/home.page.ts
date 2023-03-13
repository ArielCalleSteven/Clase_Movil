import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { title } from 'process';
import { flatMap } from 'rxjs';
import { workerData } from 'worker_threads';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 tasks:{title: string; completed: boolean;} []=
 [
  {title:"Tender la cama", completed:false},  
  {title: "Lavar los platos", completed:false}, 
  {title: "Hacer deberes", completed:false}
];

newTask = '';

addTask()
{
  if(this.newTask.trim().length===0)
  {
    return;
  }
  this.tasks.push({title:this.newTask,completed:false});
  this.newTask= '';
}

deleteTask(task: {title:string;completed:boolean;})
{
  const index = this.tasks.indexOf(task);
  this.tasks.splice(index,1);
}


getProgress()
{
  const totalTask= this.tasks.length;
  
}


}
