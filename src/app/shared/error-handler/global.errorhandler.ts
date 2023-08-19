import { ErrorHandler } from '@angular/core';

export class GlobaErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.log('Error', error);
  }
}
