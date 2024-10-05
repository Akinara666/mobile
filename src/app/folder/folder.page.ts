import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

interface GType{
  g_name: string
  g_rating: string
}

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  var1:string = "1"
  var2:string = "2"
  public gameName = '';
  public games = ["World Of Warcraft", "Persona 5", "Outer Wilds", "Battlefield 1", "Cyberpunk 2077"];  
  public folder!: string;
  public appPages = inject(AppComponent).appPages;
  private activatedRoute = inject(ActivatedRoute);

  private game_name = null;
  private game_score = null;


  constructor() {}

  games_list: GType[] = []

  btn_click(){
      this.var1 = "?"
      this.var2 = "..."
      this.games.push(this.gameName)
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}

