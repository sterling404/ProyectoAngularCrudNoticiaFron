import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from '../form-dialog/body.component';
import { MainService } from 'src/app/services/main.service';
import { Blog } from 'src/app/interface/app-interface';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

// export interface DialogData {
//   animal: string;
//   name: string;
// }
@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss'],
})
export class MainFeedComponent implements OnInit {
  blogs!: Blog[];
  blogsupdate!: Blog[];
  isLoading = false;
  isUserLogde=this.authService.isAuthenticated();

  

 
  constructor(public dialog: MatDialog, private service: MainService, private router: Router, private authService:AuthService,private snackBar: MatSnackBar) {}

  @Input() title!: string;
  @Input() SubTitle!: string;
  @Output() TitleEvent: EventEmitter<string> = new EventEmitter();
  @Output() SubTitleEvent: EventEmitter<string> = new EventEmitter();

  showMessage(message: string) {
    this.snackBar.open(message)._dismissAfter(3000);
  }

  ngOnInit(): void {
    console.log(this.title);
    console.log(this.SubTitle);
    this.getAllBlogs();
    
  }

  goToBlog(blogId:number){
    this.router.navigate(['/blog',blogId])
  }
  getAllBlogs() {
    this.isLoading = true;
    this.service.getAll().subscribe(
      {next:(response) => {
          this.blogs = response;
          console.log(this.blogs);
        },
        error:()=>{
          this.isLoading=false;
          this.showMessage('Error al cargar la noticia ')
        }



    })
  }
  
  buttonPressed() {
    this.TitleEvent.emit('Aplicacion blog');
  }
  buttonpressedSub() {
    this.SubTitleEvent.emit('Aplicacion blog');
  }

  openDialog() {
    const dialogRef = this.dialog.open(FormDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        const blogData = {
          title: result.title,
          subtitle: result.SubTitle,
          body: result.conten,
          report_type: result.typeNews,
          is_primary: result.topnews,
          publisher_name: result.publisherName,
          publisher_job: result.publisher_job,
        };
        console.log(blogData);
        if (!result.subtitle) {
          result.subtitle = 'Subtítulo por defecto';
        }
        this.createBlog(blogData);
      }
    });
  }
  getAllBlogsid(id: number) {
    this.isLoading = true;
    this.service.getBlogById(id).subscribe((response) => {
      this.blogsupdate = response;
      this.isLoading = false;
      console.log(this.blogsupdate);
    });
  }
  logout(){
    this.authService.deleteToken();
    this.router.navigate(['/login'])
  }
  login(){
    this.router.navigate(['/login'])
  }
  openUpdateDialog(id: number | undefined) {
    const selectedBlog = this.blogs.find((blog)=> blog.id ===id);
    console.log(selectedBlog)
    if (id !== undefined) {
      this.isLoading = true;
      this.service.getBlogById(id).subscribe((response) => {
        this.isLoading = false;
        if (response) {
          const dialogRef = this.dialog.open(FormDialogComponent, {
            data: response 
          });
  
          dialogRef.afterClosed().subscribe((result) => {
            if (result) {
              const blogDataUpdate = {
                title: result.title,
                subtitle: result.SubTitle,
                body: result.conten,
                report_type: result.typeNews,
                is_primary: result.topnews,
                publisher_name: result.publisherName,
                publisher_job: result.publisher_job,
              };
              console.log(blogDataUpdate);
              this.updateBlog(id, blogDataUpdate);
            }
          });
        }
      });
    }
  }
  createBlog(data: any) {
    this.service.createBlog(data).subscribe((response) => {
      console.log('Blog creado:', response);
      this.getAllBlogs();
    });
  }
  updateBlog(id: number, data: any) {
    this.service.updateBlog(id, data).subscribe((response) => {
      console.log('Blog actualizado:', response);
      this.getAllBlogs();
    });
  }

  deleteBlog(id: number | undefined) {
    if (id !== undefined) {
      this.service.deleteBlog(id).subscribe(() => {
        console.log('Blog eliminado');
        this.getAllBlogs();
      });
    }
  }
}
