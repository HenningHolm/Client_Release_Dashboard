export type ReleaseContainer = {
    containerName: string;
    blobs: Blob[];
    numberOfBlobs: number;
    };

export const StepStatus = {
    NotReached: 'step_not_reached',
    Selected: 'step_in_progress',
    Passed: 'step_passed'
    } as const;

const TaskProgress = {
    NotStarted: 'task_not_started',
    InProgress: 'task_in_progress',
    Approved: 'task_approved',
    Error: 'task_error'
    } as const;

export type Task = {
    taskName: string;
    taskDescription: string;
    taskProgress: TaskProgressType;
    stepStatus: StepStatusType;
};

export type StepStatusType = typeof StepStatus[keyof typeof StepStatus];
export type TaskProgressType = typeof TaskProgress[keyof typeof TaskProgress];
