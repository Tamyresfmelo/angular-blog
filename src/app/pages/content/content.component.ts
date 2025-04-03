import { Component, inject, OnInit } from '@angular/core';
import { ValueChangeEvent } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import{dataFake} from "../../data/dataFakes"


@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  route = inject(ActivatedRoute);
  photoCover: string = "https://love.doghero.com.br/wp-content/uploads/2018/03/shutterstock_685448800-e1541428463250-1024x768.jpg"
  contentTitle: string = ""
  contentDescription: string = "bla"
  private id: string | null = "0";



  ngOnInit():void {
    this.route.paramMap.subscribe( value =>
      this.id = (value.get("id"))
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
    }

}
