/*
Exercise: API Response Wrapper
Create a generic type for API responses:
- Success response with data
- Error response with message
Include utility functions to handle both cases
*/
interface User {
  id: number;
  name: string;
}

type Success<T> = {
  status: "success";
  data: T;
};

type ApiError = {
  status: "error";
  message: string;
};

type ApiResponse<T> = Success<T> | ApiError;

function successResponse<T>(data: T): Success<T> {
  return {
    status: "success",
    data: data,
  };
}

function errorResponse(message: string): ApiError {
  return {
    status: "error",
    message: message,
  };
}

function response<T>(response: ApiResponse<T>): void {
  if (response.status === "success") {
    console.log(response.data);
  } else {
    console.log(response.message);
  }
}

function test() {
  const user: User = { id: 1, name: "Samba" };
  const successResult = successResponse(user);
  response(successResult);
}
