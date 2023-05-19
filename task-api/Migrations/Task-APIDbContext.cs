using TaskAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace TaskAPI.Migrations;

public class TaskAPIDbContext : DbContext{
    public DbSet<Models.Task> Task { get; set; }

    public TaskAPIDbContext(DbContextOptions<TaskAPIDbContext> options)
    :base(options){}

    protected override void OnModelCreating(ModelBuilder modelBuilder){
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Models.Task>(entity => {
            entity.HasKey(t => t.TaskId);
            entity.Property(t => t.Title);
            entity.Property(t => t.Completed);
        });

    modelBuilder.Entity<Models.Task>().HasData(
        new Models.Task {
            TaskId = 1,
            Title = "Go for a walk in the park",
            Completed = false
        },
        new Models.Task {
            TaskId = 2,
            Title = "Drive my car around town",
            Completed = false
        }
    );


    }


    
}