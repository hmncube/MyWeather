export class Error {
  isError: Boolean;
  msg: string;

  constructor(isError: Boolean, msg: string) {
    this.isError = isError;
    this.msg = msg;
  }
}
