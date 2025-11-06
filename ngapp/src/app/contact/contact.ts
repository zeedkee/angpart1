import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  id: any;
  constructor(private route: ActivatedRoute){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

}
