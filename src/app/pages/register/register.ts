import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {

  // ✅ Signal to track which form is visible
  isLoginFormVisible = signal<boolean>(false);

  toggleForm() {
    this.isLoginFormVisible.set(!this.isLoginFormVisible());
  }

}
