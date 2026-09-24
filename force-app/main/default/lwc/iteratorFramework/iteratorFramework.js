import Priority from '@salesforce/schema/Case.Priority';
import { LightningElement } from 'lwc';

export default class IteratorFramework extends LightningElement {

      taskList = [
            { taskId: 1, taskName: 'Task 1', status: 'Completed' , priority: 'High' },
            { taskId: 2, taskName: 'Task 2', status: 'In progress' , priority: 'Medium' },
            { taskId: 3, taskName: 'Task 3', status: 'Started' , priority: 'Low' }

    ];

}