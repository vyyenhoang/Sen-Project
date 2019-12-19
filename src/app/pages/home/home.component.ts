import { Component, OnInit } from '@angular/core';
import { AppData2 } from 'src/app/AppData2';
import { AppData3 } from 'src/app/AppData3';
import { AppData4 } from 'src/app/AppData4';
import { apiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

declare var jquery: any;
declare var $: any;
import Swal from 'sweetalert2'
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   data = new AppData2('', '', '', '', '', '', '', '', '', '', '');
   data2 = new AppData3('', '', '', '', '');
   data3 = new AppData4('');

   custid: any;
  orderStatus: any;
  trackingcall: boolean=false;

  constructor(private apiservice: apiService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    if ($('.active_testimonial').length) {
      $('.active_testimonial').owlCarousel({
          items: 1,
          loop: true,
          dots: false,
          nav: true,
          margin: 0,
          responsiveClass: true,
          autoplay: 2500,
          slideSpeed: 300,
          paginationSpeed: 500,
          navText: ['<i class=\'fa fa-long-arrow-left\'>', '<i class=\'fa fa-long-arrow-right\'>']
      });
  }
         // Step show event
    // tslint:disable-next-line:only-arrow-functions
    $('#smartwizard').on('showStep', function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
          // alert("You are on step "+stepNumber+" now");
          if (stepPosition === 'first') {
              $('#prev-btn').addClass('disabled');
          } else if (stepPosition === 'final') {
              // tslint:disable-next-line:quotemark
              $("#next-btn").addClass('disabled');
          } else {
              $('#prev-btn').removeClass('disabled');
              $('#next-btn').removeClass('disabled');
          }
       });

       // Toolbar extra buttons
    const btnFinish = $('<button></button>').text('Finish')
                                        .addClass('btn btn-info')
                                        // tslint:disable-next-line:only-arrow-functions
                                        .on('click', function() { alert('Finish Clicked'); });
    const btnCancel = $('<button></button>').text('Cancel')
                                        .addClass('btn btn-danger')
                                        // tslint:disable-next-line:only-arrow-functions
                                        .on('click', function() { $('#smartwizard').smartWizard('reset'); });

       // Please note enabling option "showStepURLhash" will make navigation conflict for multiple wizard in a page.
       // so that option is disabling => showStepURLhash: false

       // Smart Wizard 1
    $('#smartwizard').smartWizard({
               selected: 0,
               theme: 'arrows',
               transitionEffect: 'fade',
               showStepURLhash: false,
               toolbarSettings: {toolbarPosition: 'both',
                                 toolbarExtraButtons: [btnFinish, btnCancel]
                               }
       });

       // Smart Wizard 2
    $('#smartwizard2').smartWizard({
               selected: 0,
               theme: 'default',
               transitionEffect: 'fade',
               showStepURLhash: false
       });
      // console.log(this.custid);
  }
    quote() {

      this.spinner.show();
      Swal.fire({
        title: 'Coming Soon!',
        text: 'Feature is under development.',
        type:'warning'
      
      })
      this.spinner.hide();
    // this.apiservice.post('quote', this.data).subscribe((response: any) => {

    //    console.log(response.body);
    //   // console.log(custid);
    //   Swal.fire('Recevied', 'Successfully sent! We will get back to you within 24 hours...!', 'success');
    //   this.spinner.hide();
    //    //window.location.replace('http://localhost:4200/');

    //   });
  }

calculate() {
  this.spinner.show();
      Swal.fire({
        title: 'Coming Soon!',
        text: 'Feature is under development.',
        type:'warning'
      
      })
      this.spinner.hide();
  // this.spinner.show();
  //   this.apiservice.post('calculate', this.data2).subscribe((response: any) => {

  //      // this.custid = res.body.response;
  //     console.log(response.body);
  //     // console.log(custid);
  //     // alert('The estimated amount is ' + response.body.response);
  //     Swal.fire('Estimated Amount', `The estimated amount is  ${response.body.response}`, 'success');

  //     this.spinner.hide();
  //     // window.location.replace('http://localhost:4200/');
  //     });
  }

  order() {
    this.spinner.show();
    Swal.fire({
      title: 'Coming Soon!',
      text: 'Feature is under development.',
      type:'warning'
    
    })
    this.spinner.hide();
// this.spinner.show();
//     this.apiservice.post('order', this.data3).subscribe((response: any) => {


//        // this.custid = res.body.response;

//        this.orderStatus=response.body.response
//        this.trackingcall=true
//       console.log(response.body);
// this.spinner.hide();
//       });
  }

}
