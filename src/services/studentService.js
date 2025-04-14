// This service simulates API calls for student data management.
// Currently, it is a placeholder for future backend integration.

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchStudents = async () => {
  // Simulate fetching students from a backend
  await delay(500);
  return [];
};

export const addStudent = async (student) => {
  // Simulate adding a student to backend
  await delay(300);
  return student;
};

export const updateStudent = async (student) => {
  // Simulate updating a student in backend
  await delay(300);
  return student;
};

export const deleteStudent = async (id) => {
  // Simulate deleting a student from backend
  await delay(300);
  return id;
};
