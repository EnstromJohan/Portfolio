export const projects = [
    {
      name: 'Portfolio site',
      tools: ['Html', 'Javascript', 'React', 'Tailwind', 'EmailJS'],
      description: 'A portfolio site showcasing my projects and skills featuring a responsive design with React and Tailwind and a contact form using EmailJS',
      repoLink: 'https://github.com/EnstromJohan/Portfolio'
    },
    {
      name: 'Command-Line Post Voting Application',
      tools: ['C#', '.NET', 'Visual Studio or VS Code', '.NET Core CLI'],
      description: 'A command-line application allowing users to add, view, and vote on posts through an interactive menu-driven interface' + 
      '.Demonstrates OOP principles, design patterns like SRP and Facade, and clean code practices for maintainability and modularity.',
      repoLink: 'https://github.com/EnstromJohan/ForumPost'
    },
    {
      name: 'Film Database with EF Code-First and Blazor Admin',
      tools: ['EF Code-First', 'Blazor', 'ASP.NET Core', 'REST API', 'SQL Server'],
      description: 'In this school assignment, I have developed a film database using EF Code-First,' + 
      'adding various columns including a Film table with URL links and a SimilarFilms table to link related movies.' +
      'I have also created an API with a data layer as a service to interact with the database and a server-side Blazor' + 
      'admin application to perform CRUD operations via the API. This admin application will use HttpClient to call the API and does not require JWT authentication.',
      repoLink: 'https://github.com/EnstromJohan/BlazorProject'
    },
    {
      name: 'Moo Game Refactoring',
      tools: ['C#', 'Dependency Injection', 'Unit Testing', 'Mock Objects', 'Design Patterns'],
      description: 'I refactored the game "Moo" (similar to Mastermind) to improve code quality and testability by addressing code smells,' + 
      'improving naming, structuring methods, adding comments, and using design patterns. I separated the layers (UI, logic, statistics)' + 
      'and used Dependency Injection for assembly. I also wrote tests for the logic using Mock Objects to manage I/O and simulate randomness.',
      repoLink: 'https://github.com/EnstromJohan/MooPlayGame'
    },
  ];