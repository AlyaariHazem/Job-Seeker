import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from 'app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  userData: any;
   constructor(private userService: UserService) {
    this.userService.user$.subscribe(data => {
      this.userData = data;
    });
  }
}
