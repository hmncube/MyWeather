export class ApiResponse {
  success: Boolean;
  error: string;
  data: Object;

  constructor(success: Boolean, error: string, data: Object) {
    this.success = success;
    this.error = error;
    this.data = data;
  }
}
