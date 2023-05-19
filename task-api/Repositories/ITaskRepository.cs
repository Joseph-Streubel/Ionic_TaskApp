using TaskAPI.Models;

namespace TaskAPI.Repositories;

public interface ITaskRepository{
    IEnumerable<Models.Task> GetAllTasks();
    Models.Task GetTaskById(int TaskId);
    Models.Task CreateNewTask(Models.Task newTask);
    Models.Task UpdateTask(Models.Task newTask);
    void DeleteTaskById(int TaskId);
}