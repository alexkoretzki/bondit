import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastSubject: Subject<string> = new Subject<string>();

  getMessage(): Observable<string> {
    return this.toastSubject.asObservable();
  }

  showToast(message: string): void {
    this.toastSubject.next(message);
  }
}
