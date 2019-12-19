import { Component, OnInit } from '@angular/core';
import { apiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
loggedInActive=localStorage.getItem("loggedInData")

userName=localStorage.getItem('user_name');
token=localStorage.getItem('token')
  constructor(private apiservice:apiService,
    private spinner:NgxSpinnerService,
    private router:Router,
    private loadingBar:LoadingBarService) { }

  ngOnInit() {
    this.loadingBar.start();
    this.loadingBar.complete();
  }

  logout(){

    localStorage.clear();
    this.router.navigateByUrl('');
    location.reload();
    //this.spinner.show();
    // this.loadingBar.start();
    // this.apiservice.post('auth/logout',this.token)
    
    // .pipe(
    //   catchError(err => {
    //     console.log('Handling error locally and rethrowing it...', err);

    //     //this.spinner.hide();
    //     this.loadingBar.complete();
    //     if(err.status===401){
    //       this.loadingBar.complete();
    //       //this.errormessage = 'Invalid Email or Password';
    //     }
        
    //     return throwError(err);
    //   })
    // )
    // .subscribe((res:any)=>{
      
    //   localStorage.clear();
    //   localStorage.removeItem('token');
    //   //this.spinner.hide();
    //   this.loadingBar.complete();
    //   this.router.navigateByUrl('/');
    // })

  }
  home(){
    $("#home").addClass('active');
    $("#about").removeClass('active');
    $("#service").removeClass('active');
    $("#login").removeClass('active');

    $("#contact").removeClass('active');
  }
  about(){
    $("#home").removeClass('active');
    $("#about").addClass('active');
    $("#service").removeClass('active');
    $("#login").removeClass('active');

    $("#contact").removeClass('active');
  }
  service(){
    $("#home").removeClass('active');
    $("#about").removeClass('active');
    $("#service").addClass('active');
    $("#login").removeClass('active');

    $("#contact").removeClass('active');
  }
  login(){
    $("#home").removeClass('active');
    $("#about").removeClass('active');
    $("#service").removeClass('active');
    $("#login").addClass('active');

    $("#contact").removeClass('active');
  }

  contact(){
    $("#home").removeClass('active');
    $("#about").removeClass('active');
    $("#service").removeClass('active');
    $("#login").removeClass('active');

    $("#contact").addClass('active');
  }

}
