import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SideBarComponent } from 'app/pages/side-bar/side-bar.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule,SideBarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  }
