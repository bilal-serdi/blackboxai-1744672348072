import React, { useState, useContext, useEffect } from 'react';
import { StudentContext } from '../context/StudentContext';
import {
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';

const UpdateStudent = ({ student, onCancel }) => {
  const { updateStudent } = useContext(StudentContext);
  const [name, setName] = useState(student.name);
  const [room, setRoom] = useState(student.room);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setName(student.name);
    setRoom(student.room);
  }, [student]);

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
    updateStudent({ id: student.id, name: name.trim(), room: room.trim() });
    onCancel();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Update Student
      </Typography>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
        margin="normal"
        disabled
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
      <Button type="submit" variant="contained" sx={{ mt: 2, mr: 2 }}>
        Update
      </Button>
      <Button variant="outlined" sx={{ mt: 2 }} onClick={onCancel}>
        Cancel
      </Button>
    </Box>
  );
};

export default UpdateStudent;
