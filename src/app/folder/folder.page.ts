import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  var1:string = "1"
  var2:string = "2"
  public games = ["World Of Warcraft", "Persona 5", "Outer Wilds", "Battlefield 1", "Cyberpunk 2077"]
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  btn_click(){
      this.var1 = "?"
      this.var2 = "..."
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
