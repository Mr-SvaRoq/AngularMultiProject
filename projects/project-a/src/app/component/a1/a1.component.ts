import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { B1Component } from '../../../../../project-b/src/app/component/b1/b1.component';
import { C1Component } from '../../../../../project-c/src/app/component/c1/c1.component';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.scss'],
  standalone: true,
  imports: [CommonModule, C1Component, B1Component]
})
export class A1Component implements OnInit {

  showMe: Boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    console.log('A1 standalone');
  }

}
