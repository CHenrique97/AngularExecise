import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../galleryservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {
  
  image:any;
  constructor(
    private _galleryService:GalleryService,
    private _activeRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    const user = this._activeRoute.snapshot.params.username;
    this._galleryService.images(user).subscribe(photos => this.image = photos);
  }

}
