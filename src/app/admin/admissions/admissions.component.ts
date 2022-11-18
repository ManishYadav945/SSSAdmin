// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { AdmissionService } from 'src/app/services/admission.service';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-admissions',
//   templateUrl: './admissions.component.html',
//   styleUrls: ['./admissions.component.css']
// })
// export class AdmissionsComponent implements OnInit {

//   admissiondData:any;
//   data:Array<any>=[ ]
//   totalRecords:any;
//   page:any=1;

  
//   constructor(private service:AdmissionService) { 
    
//   }
  
//   ngOnInit(): void {
//     this.service.getData().subscribe(
//       (data)=>{
//         console.log(data);
//         this.admissiondData=data;
//       },
//     (error)=>{
//       console.log(error);
//     }

//     )
//   }
//   deleteAdmission(id:any){

//     Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
      
//     }).then((result) => {
     
       
//       if (result.isConfirmed) {
       
//       this.service.deleteAdmission(id).subscribe(
//         (data)=>{
//           console.log(data);
//           this.admissiondData=data;
//         },
//         (error)=>{
//           console.log(error);
//         }
//       )
    
//         Swal.fire(
//           'Deleted!',
//           'Your file has been deleted.',
//           'success'
//         )
//       }
//     })



   

//       this.service.deleteAdmission(id).subscribe(
//         (data)=>{
//           console.log(data);
//           this.admissiondData=data;
//         },
//         (error)=>{
//           console.log(error);
//         }
//       )
    

//   }

// }
