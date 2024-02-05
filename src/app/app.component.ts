import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeTachesComponent } from './liste-taches/liste-taches.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, ListeTachesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo';
}
