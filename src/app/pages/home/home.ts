import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../shared/header/header';
import { Nav } from '../../shared/nav/nav';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, Header, Nav, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
