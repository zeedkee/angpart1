import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngapp');
  // import and inject in build angular Router module
constructor(private router: Router) { }
gotoLogin() {
this.router.navigate(['/login']);
}
gotoContact() {
this.router.navigate(['/contact']);
}
content = 'Content from Parent'
states = ['Tozeur', 'Tunis', 'Nabeul'];


}
