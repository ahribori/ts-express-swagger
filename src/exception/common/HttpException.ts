import { CustomError } from 'ts-custom-error';

export default class HttpException extends CustomError {
  /**
   * @IsInt
   */
  status: number;
  message: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}
