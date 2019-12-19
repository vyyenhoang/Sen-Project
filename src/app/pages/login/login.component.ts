import { Component, OnInit } from '@angular/core';
import { AppData } from 'src/app/AppData';
// import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { apiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // constructor() { }
  loginres: any;
  // imgUrl=environment.imageUrl;
data = new AppData('', '');

  constructor(private apiservice: apiService,
    private route:Router) { }


  ngOnInit() {
    // this.postlogin();
  // if (response.status === true) {alert('successfully authenticated'); } else {alert('Email and Password doesnot match'); }

  }

  postlogin() {

    this.apiservice.post('login', this.data).subscribe((response: any) => {

      // this.loginres = res.body.response;

      console.log(response.body);
      if (response.body.status === true) {
      
        this.route.navigateByUrl("")
        localStorage.setItem("loggedInData",response.body);
      } else {
           Swal.fire('Not Valid', 'Invalid email or password', 'error');

           }
      });
  }

}


