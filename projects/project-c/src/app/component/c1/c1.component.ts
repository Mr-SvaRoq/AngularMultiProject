import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class C1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skuska() {
    console.log('I am worn')
  }
}
