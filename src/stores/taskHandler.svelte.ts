import { StepStatus, TaskProgress, type Task } from "../types/types";

function createTaskHandler(){
    let tasks = $state<Task[]>([]);
    let selectedIndex = $state<number>(0);

    function selectStep(index: number) {
        for (let i = 0; i < tasks.length; i++) {    
            if (i < index) {
                tasks[i].stepStatus = StepStatus.Passed;
            } else if (i > index) {
                tasks[i].stepStatus = StepStatus.NotReached;
            } else {
                tasks[i].stepStatus = StepStatus.Selected;
            }
        }
        selectedIndex = index;
    }

    function setTaskStatus(index: number, status: TaskProgress) {
        tasks[index].taskProgress = status;
    }

    return {
        get tasks() { return tasks; },
        get selectedIndex() { return selectedIndex; },
        selectStep,
        setTaskStatus
    };
}

export const taskHandler = createTaskHandler();



