using TaskAPI.Migrations;
using TaskAPI.Models;

namespace TaskAPI.Repositories;

public class TaskRepository : ITaskRepository
{

    private readonly TaskAPIDbContext _context;

    public TaskRepository(TaskAPIDbContext context){
        _context = context;
    }


    public Models.Task CreateNewTask(Models.Task newTask)
    {
        _context.Task.Add(newTask);
        _context.SaveChanges();
        return newTask;
    }

    public void DeleteTaskById(int TaskId)
    {
        var task = _context.Task.Find(TaskId);
        if (task != null) {
            _context.Task.Remove(task); 
            _context.SaveChanges(); 
        }
    }

    public IEnumerable<Models.Task> GetAllTasks()
    {
        return _context.Task.ToList();
    }

    public Models.Task GetTaskById(int TaskId)
    {
        return _context.Task.SingleOrDefault(c => c.TaskId == TaskId);
    }

    public Models.Task UpdateTask(Models.Task newTask)
    {
        var originalTask = _context.Task.Find(newTask.TaskId);
        if (originalTask != null) {
            originalTask.Title = newTask.Title;
            originalTask.Completed = newTask.Completed;
            _context.SaveChanges();
        }
        return originalTask;
    }
}