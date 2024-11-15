export type ReleaseContainer = {
    containerName: string;
    blobs: Blob[];
    numberOfBlobs: number;
    };

export enum StepStatus {
    NotReached = 'step_not_reached',
    Selected = 'step_in_progress',
    Passed = 'step_passed'
    } 

export enum TaskProgress {
    NotStarted = 'task_not_started',
    InProgress = 'task_in_progress',
    Approved = 'task_approved',
    Error = 'task_error'
    }
export type Task = {
    taskName: string;
    taskDescription: string;
    taskProgress: TaskProgress;
    stepStatus: StepStatus;
};

