import React, { useState } from 'react';
import { StudentProvider } from './context/StudentContext';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import UpdateStudent from './components/UpdateStudent';
import { Container, Typography, Box, Paper } from '@mui/material';

function App() {
  const [editingStudent, setEditingStudent] = useState(null);

  const startEditing = (student) => {
    setEditingStudent(student);
  };

  const stopEditing = () => {
    setEditingStudent(null);
  };

  return (
    <StudentProvider>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Dormitory Student Management
          </Typography>
          {!editingStudent ? (
            <>
              <AddStudent />
              <StudentList onEdit={startEditing} />
            </>
          ) : (
            <UpdateStudent student={editingStudent} onCancel={stopEditing} />
          )}
        </Paper>
      </Container>
    </StudentProvider>
  );
}

export default App;
