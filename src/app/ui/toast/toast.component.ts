import { Component, OnInit } from '@angular/core';
import { ToastService } from './service/toast.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  showToast = false;
  message: string;
  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService
      .getMessage()
      .pipe(filter((message) => message.length > 0))
      .subscribe((message) => {
        this.message = message;
        this.showToast = true;
        setTimeout(() => {
          this.showToast = false;
          this.message = null;
        }, 5000);
      });
  }
  close(): void {
    this.showToast = false;
  }
}
