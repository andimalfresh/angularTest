import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public pictureIndex = 0;
  public display = false;


  public pictures = [
    {
      title: "Image 1",
      path: '../assets/img/pic1.jpg',
      value: 24,
    },
    {
      title: "Image 2",
      path: '../assets/img/pic2.jpg',
      value: 49,
    },
    {
      title: "Image 3",
      path: '../assets/img/pic3.jpg',
      value: 74
    }
  ]
  public checkTheSlider =()=> {
    console.log("itsthesliderbruh")
  }
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
