import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from '../../shared/nav/nav';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,Nav],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
