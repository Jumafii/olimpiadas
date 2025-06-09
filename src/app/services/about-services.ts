import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutServices {
   constructor() { }

  teamMembers = [
    { id: 1, name: "Fiorella Gazzola Grenier", role: "Scrum Master", imageUrl: "" },
    { id: 2, name: "Juliana Troncuto Bobadilla", role: "Developer", imageUrl: "" },
    { id: 3, name: "Mateo Aires", role: "Developer", imageUrl: "" },
  ];

  getTeamMembers() {
    return this.teamMembers;
  }
}
