import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class A1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert('A1 standalone')
  }

}
