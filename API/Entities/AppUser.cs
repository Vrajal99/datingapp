namespace API.Entities;

// Each Entity Class maps to a table in an RDBMS. That means an "AppUser" Table
// Each instance of AppUser shall represent a row in that table
public class AppUser

{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string DisplayName { get; set; }
    public required string Email { get; set; }

}
