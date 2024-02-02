
This is a simple ToDo application built with React for the frontend and Spring Boot for the backend.



The ToDo application allows users to manage their tasks. Users can view, add, edit, delete and mark their task as complete. 
The frontend is built with React, providing a modern and responsive user interface. 
The backend is implemented in Spring Boot, offering a RESTful API for task management.

## How to Run

### Frontend (React)

1. Install Node.js if not already installed: [Node.js](https://nodejs.org/)

2. Open a terminal and navigate to the frontend directory:

   ```bash
   cd /frontend

   npm install

   npm run start

### Backend (Springboot)
   1. Make sure you have Maven installed
   2. Open a terminal and navigate to the backend
   3. Update the database configuration in src/main/resources/application.properties with your local MySQL details: 
    
    `
      spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
      spring.datasource.username=your_username
      spring.datasource.password=your_password

  4. Run the Spring Boot application:

     ```bash
     mvn spring-boot:run

  5. Open your browser and browse to http://localhost:3000 to access the ToDo application.
  
    
### Note : Please hit refresh in your browser after clicking Add Todo/Edit Todo, error because of react-router-dom
