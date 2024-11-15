import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { Blog } from 'src/app/interface/app-interface';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.scss'],
})
export class SingleViewComponent implements OnInit {
  blogId!: number;
  blog!: Blog;
  isLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: MainService
  ) {}
  ngOnInit(): void {
    this.blogId = Number(this.activatedRoute.snapshot.params['id']);
    this.getBlogid(this.blogId);
    console.log(this.blogId);
  }

  getBlogid(id: number) {
    this.isLoading = true;
    this.service.getBlogById(id).subscribe({
      next: (response) => {
        this.blog = response;
        this.isLoading = false;
        console.log(this.blog);
      },
      error: () => {
        alert('Error');
      },
      complete: () => {},
    });
  }
}
