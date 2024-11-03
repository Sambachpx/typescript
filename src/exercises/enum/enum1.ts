// Define a Student type with various properties
interface Student {
  id: number;
  name: string;
  age: number;
  email: string;
  grade: number;
}

// Use Pick to create a type with just name and grade
type StudentGradeCard = Pick<Student, "name" | "grade">;

// Use Omit to create a type without email and grade
type StudentBasicInfo = Omit<Student, "email" | "grade">;
