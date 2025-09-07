# React: Prioritize Tasks

Build a simple task manager where users can add tasks, assign priorities, view them, and delete them as needed.

Your users should be able to:
- Add a task with its priority when they click Add.
- See tasks listed in order of priority (lowest number first).
- Clear the task and priority fields after adding it.
- Receive an error message when the task is added without entering the task or its priority
- Remove a task by clicking the delete icon next to it.

## Implementation Details
- Initially, the task table should be empty.
- The task title input must use type text; the task priority input must use type number.
- When adding a task, show an error toast notification with the message 'Please enter both title and task priority' if either input is empty.

## Required Data Test IDs
The following data-testid attributes are required in the components for the test cases to pass; do not change/delete them: 

| **data-testid**       | **Description**                       |
|-----------------------|---------------------------------------|
| input-task-name       | Input box for task name               |
| input-task-priority   | Input box for task priority           |
| submit-button         | Button to add the task.               |
| tasksList             | Table or list container for tasks     |

## Commands

- Run:

```bash
npm start
```

- Install:

```bash
npm install
```

- Test:

```bash
npm test
```

## Read-Only Files

- `src/App.js`
- `src/App.test.js`
- `src/components/Navbar.js`
- `src/index.css`
- `src/index.js`
- `src/registerServiceWorker.js`

## Environment

- React Version: 19.1.0
- Node Version: 22(LTS)
- Default Port: 8000
