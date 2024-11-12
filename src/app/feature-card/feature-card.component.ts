import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DrawerComponent } from '../drawer/drawer.component';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule, RouterModule,DrawerComponent],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss'
})
export class FeatureCardComponent {

}
