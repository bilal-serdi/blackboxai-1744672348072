import React, { useState, useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import {
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const AddStudent = () => {
  const { addStudent } = useContext(StudentContext);
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!room.trim()) newErrors.room = 'Room number is required';
    else if (!/^[A-Za-z0-9-]+$/.test(room.trim())) newErrors.room = 'Invalid room number format';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    addStudent({ id: uuidv4(), name: name.trim(), room: room.trim() });
    setName('');
    setRoom('');
    setErrors({});
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Add New Student
      </Typography>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Room Number"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        error={!!errors.room}
        helperText={errors.room}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Add Student
      </Button>
    </Box>
  );
};

export default AddStudent;
