import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-b1',
  templateUrl: './b1.component.html',
  styleUrls: ['./b1.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class B1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('B1 works')
  }

}
