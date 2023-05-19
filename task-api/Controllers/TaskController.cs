using TaskAPI.Models;
using TaskAPI.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace TaskAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TaskController : ControllerBase{
    private readonly ILogger<TaskController> _logger;
    private readonly ITaskRepository _taskRepository;

    public TaskController(ILogger<TaskController> logger, ITaskRepository repository){
        _logger = logger;
        _taskRepository = repository;
    }


    [HttpGet]
    public ActionResult<IEnumerable<Models.Task>> GetAllTasks(){
        return Ok(_taskRepository.GetAllTasks());
    }


    [HttpGet]
    [Route("{TaskId:int}")]
    public ActionResult<Models.Task> GetTaskById(int TaskId){
        var task = _taskRepository.GetTaskById(TaskId);
        if (task ==null){
            return NotFound();
        }
        return Ok(task);
    }


    [HttpPost]
    public ActionResult<Models.Task> CreateNewTask(Models.Task newTask){
        if (!ModelState.IsValid || newTask == null) {
        return BadRequest();
    }

    var defaultTask = new Models.Task{
        Title = newTask.Title,
        Completed = false
    };

    var createdTask = _taskRepository.CreateNewTask(defaultTask);
    return Created(nameof(GetTaskById), createdTask);
    }


    [HttpPut]
    [Route("{TaskId:int}")]
    public ActionResult<Models.Task> UpdateTask(Models.Task newTask) 
    {
    if (!ModelState.IsValid || newTask == null) {
        return BadRequest();
    }

    // var updatedTask = new Models.Task{
    //     Title = newTask.Title,
    //     Completed = newTask.Completed
    // };

    return Ok(_taskRepository.UpdateTask(newTask));
    }


    [HttpDelete]
    [Route("{TaskId:int}")]
    public ActionResult DeleteTaskById(int TaskId) 
    {
    _taskRepository.DeleteTaskById(TaskId); 
    return NoContent();
    }


}