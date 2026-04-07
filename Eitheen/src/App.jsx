import React from 'react';

function App() {
   const Students = [
    { id: 1, name: "Rahul", age: 20 },
    { id: 2, name: "Amit", age: 21 },
    { id: 3, name: "Neha", age: 22 },
   ];

   return (
      <div>
          <h1>Student List</h1>

          <table border="1">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
            {Students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
              </tr>
            ))}
          </table>

      </div>
   )
    
   
}

export default App;