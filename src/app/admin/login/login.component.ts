// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthenticationService } from 'src/app/jwtservice/authentication.service';



// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {


//   myform:FormGroup;

//   constructor(private fb:FormBuilder,private router:Router,
//     private Loginservice: AuthenticationService){
//       this.myform = this.fb.group({
//         username:['',Validators.required],
//         password:['',Validators.required]
//       });

//     }

    
//     password:any;

//     show = false;

//   ngOnInit(): void {
//        this.password ='password'
//   }
//   onSubmit(){
//     let username=this.myform.get("username")?.value;
//     let password=this.myform.get("password")?.value;
//     (this.Loginservice.authenticate(username,password).subscribe(
//       data=>{
//         this.router.navigate([''])
//       },
//       (error)=>{
//         console.log(error);
//       }
//       )
//     );

//   }

//   onClick() {
//     if (this.password === 'password') {
//       this.password = 'text';
//       this.show = true;
//     } else {
//       this.password = 'password';
//       this.show = false;
//     }
//   }
 


// }
