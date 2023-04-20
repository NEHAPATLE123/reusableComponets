import { Component, Input } from '@angular/core';
import { Ireels } from './shared/models/reels';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reusableComponents';


  reels : Array<Ireels> = [
    {
      title: 'Lorem Epsum 1',
      likeCount: 14,
      isLiked: false,
      id : 1,
      img: 'https://picsum.photos/300/300'
    },
    {
      title: 'Lorem Epsum 2',
      likeCount: 12,
      isLiked: true,
      id : 2,
      img: 'https://picsum.photos/300/301',
    },
    {
      title: 'Lorem Epsum 3' ,
      likeCount: 19,
      isLiked: false,
      id: 3,
      img: 'https://picsum.photos/300/302',
    },
    {
      title: 'Lorem Epsum 4',
      likeCount: 1,
      isLiked: true,
      id: 4,
      img: 'https://picsum.photos/300/303',
    },
    {
      title: 'Lorem Epsum 5',
      likeCount: 19,
      isLiked: false,
      id: 5,
      img: 'https://picsum.photos/300/307',
    },
    {
      title: 'Lorem Epsum 6',
      likeCount: 1,
      isLiked: true,
      id: 6,
      img: 'https://picsum.photos/300/305',
    }
  ]

  callBack(likeStatus:boolean, id:number){
    console.log(likeStatus)
    this.reels.forEach(comp => {
      // console.log(comp.likeCount);
     if(comp.id === id ){
      if(likeStatus){
        comp.likeCount++
      }else{
        comp.likeCount--
      }
     }
    })
}}
