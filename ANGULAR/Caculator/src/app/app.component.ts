import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CaculatorComponent } from "./caculator/caculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CaculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Caculator';
}
