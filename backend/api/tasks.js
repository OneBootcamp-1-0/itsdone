const { Router } = require('express');
const data = require('../data.json');

const router = Router();

router.get('/', (req, res) => {
  try {
    res.status(200).json(data.tasks);
  } catch (err) {
    res.status(500).json({
      message: 'Error'
    });
  }
});

router.post('/', (req, res) => {
  try {
    const newTask = req.body;
    const tasks = data.tasks;

    const newModifiedTask = { ...newTask, id: tasks.length, isDone: false, date: newTask.date ? new Date(newTask.date).toISOString() : '' };

    tasks.push(newModifiedTask);

    res.status(201).json({
      message: 'New task successfully created',
      newTask: newModifiedTask
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error'
    });
  }
});

router.patch('/:id', (req, res) => {
  try {
    let newTask = req.body;

    data.tasks = data.tasks.map(task => {
      if (task.id === Number(req.params.id)) {
        const isDonePropEmpty = newTask.isDone === undefined;
        if (!newTask.status && !isDonePropEmpty && newTask.isDone !== task.isDone) {
          newTask.status = newTask.isDone ? 'done' : 'toDo';
        }
        newTask = { ...task, ...newTask };
        newTask.date = newTask.date ? new Date(newTask.date).toISOString() : '';

        return newTask;
      }
      return task;
    });

    res.status(200).json({
      message: 'Task successfully updated',
      updatedTask: newTask
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error'
    });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const taskId = Number(req.params.id);

    data.tasks.splice(taskId, 1);
    data.tasks = data.tasks.map((task, i) => ({...task, id: i}));

    res.status(200).json({
      message: 'Task successfully deleted',
      deletedTaskId: taskId
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error'
    });
  }
});


module.exports = router;
