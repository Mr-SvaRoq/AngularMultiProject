import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class C2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
