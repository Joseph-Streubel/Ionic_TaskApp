using System.ComponentModel.DataAnnotations;

namespace TaskAPI.Models;

public class Task{
    public int TaskId { get; set; }
    public string? Title { get; set; }
    public Boolean? Completed { get; set; }
}