import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
  safeContent!: SafeHtml;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: MainService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.blogId = Number(this.activatedRoute.snapshot.params['id']);
    this.getBlogid(this.blogId);
  }

  getBlogid(id: number) {
    this.isLoading = true;
    this.service.getBlogById(id).subscribe({
      next: (response) => {
        this.blog = response.data[0];
        // Sanitize the HTML content
        this.safeContent = this.sanitizer.bypassSecurityTrustHtml(this.blog.body);
        this.isLoading = false;
      },
      error: () => {
        alert('Error al cargar el blog');
      }
    });
  }
}