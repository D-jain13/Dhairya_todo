
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
  
    
### Note : Please hit refresh in your browser if it is not auto rendering page, error because of react-router-dom

<img width="957" alt="image" src="https://github.com/D-jain13/Dhairya_todo/assets/88362930/ce4b784c-d1c7-47e2-bac0-f240f0af8a67">
<img width="960" alt="image" src="https://github.com/D-jain13/Dhairya_todo/assets/88362930/22ed705d-c752-4d54-bdb2-93f7364c03f0">
<img width="960" alt="image" src="https://github.com/D-jain13/Dhairya_todo/assets/88362930/5a02756b-b206-42ff-9adf-1936a2675cc7">

