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
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  game_name = '';
  game_rating = '';


  constructor() {}

  games_list: GType[] = []

  btn_click(){
    let game : GType = {g_name: this.game_name, g_rating: this.game_rating}
    this.games_list.push(game)
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}

