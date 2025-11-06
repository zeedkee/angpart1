import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  @Input('content') content: any;
  @Input('states') states: any;

}
