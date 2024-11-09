/*
Exercise: API Response Wrapper
Create a generic type for API responses:
- Success response with data
- Error response with message
Include utility functions to handle both cases
*/

// Write your solution here

interface User {
  id: number;
  name: string;
}

type Success<T> = {
  status: "success";
  test: T;
};

type error = {
  // TODO: voir pour le bug
  status: "erreur";
  message: string;
};

type ApiResponse<T> = Success<T> | Error;

function successResponse<T>(props: T): Success<T> {
  return {
    status: "success",
    test: props,
  };
}

function errorResponse(message: string): error {
  return {
    status: "erreur",
    message: message,
  };
}

// TODO: faire le cas ou ca fonctionne ou non / réponse API
