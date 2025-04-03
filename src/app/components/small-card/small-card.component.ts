import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-small-card',
  imports: [RouterModule], // Importando RouterModule no Standalone Component
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {
    @Input()
    photoCoverSmall: string = ""
    @Input()
    cardTitleSmall: string = ""

    @Input()
    Id: string="0"

  constructor() { }

  ngOnInit() {
  }


  }

