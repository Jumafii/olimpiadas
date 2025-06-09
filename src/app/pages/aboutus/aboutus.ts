import { Component } from '@angular/core'
import { AboutServices } from '../../services/about-services';

@Component({
  selector: 'app-aboutus',
  imports: [],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css'
})
export class Aboutus {
    teamMembers;

  constructor(private aboutService: AboutServices) {
      this.teamMembers = this.aboutService.getTeamMembers();
  }
}
