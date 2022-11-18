import { SlicePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutLIPSComponent } from './About-Dropdown/about-lips/about-lips.component';
import { CEOMessageComponent } from './About-Dropdown/ceomessage/ceomessage.component';
import { ChairmanMessageComponent } from './About-Dropdown/chairman-message/chairman-message.component';
import { PrincipalMessageComponent } from './About-Dropdown/principal-message/principal-message.component';
import { VisionandMissionComponent } from './About-Dropdown/visionand-mission/visionand-mission.component';
import { AcadmicExamComponent } from './Acadmic/acadmic-exam/acadmic-exam.component';
import { ListofBooksComponent } from './Acadmic/listof-books/listof-books.component';
import { ListofHolidaysComponent } from './Acadmic/listof-holidays/listof-holidays.component';
import { NewsLettersComponent } from './Acadmic/news-letters/news-letters.component';
import { SachalactionComponent } from './Acadmic/sachalaction/sachalaction.component';
import { SchoolUniformComponent } from './Acadmic/school-uniform/school-uniform.component';
import { OurAchivementsComponent } from './Achivements/our-achivements/our-achivements.component';
import { PhotoGalleryComponent } from './admin/photo-gallery/photo-gallery.component';
// import { AdmissionsComponent } from './admin/admissions/admissions.component';
// import { GalleryComponent } from './admin/gallery/gallery.component';
// import { ImportantlinksComponent } from './admin/importantlinks/importantlinks.component';
// import { LoginComponent } from './admin/login/login.component';
// import { NoticeComponent } from './admin/notice/notice.component';
import { RegisterationComponent } from './admin/registeration/registeration.component';
import { AdmissionProcedureComponent } from './Admission/admission-procedure/admission-procedure.component';
import { ProspectusComponent } from './Admission/prospectus/prospectus.component';
import { WhyLIPSComponent } from './Admission/why-lips/why-lips.component';
import { CareerTableComponent } from './Career/career-table/career-table.component';
import { ContactUsTableComponent } from './Contact-Us/contact-us-table/contact-us-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DownloadFilesComponent } from './Downloads/download-files/download-files.component';
import { BiologyLabComponent } from './Facilities/biology-lab/biology-lab.component';
import { CCTVSceurityComponent } from './Facilities/cctvsceurity/cctvsceurity.component';
import { ChemistryLabComponent } from './Facilities/chemistry-lab/chemistry-lab.component';
import { ComputerLabComponent } from './Facilities/computer-lab/computer-lab.component';
import { ConferenceHallComponent } from './Facilities/conference-hall/conference-hall.component';
import { DanceRoomComponent } from './Facilities/dance-room/dance-room.component';
import { DoctorsonCampousComponent } from './Facilities/doctorson-campous/doctorson-campous.component';
import { HealthMedicineComponent } from './Facilities/health-medicine/health-medicine.component';
import { InterhouseCompetitionComponent } from './Facilities/interhouse-competition/interhouse-competition.component';
import { LibraryComponent } from './Facilities/library/library.component';
import { MusicRoomComponent } from './Facilities/music-room/music-room.component';
import { PhysicsLabComponent } from './Facilities/physics-lab/physics-lab.component';
import { PreprimaryBlockComponent } from './Facilities/preprimary-block/preprimary-block.component';
import { ProfessionalSecurityComponent } from './Facilities/professional-security/professional-security.component';
import { SecurityInsideCampousComponent } from './Facilities/security-inside-campous/security-inside-campous.component';
import { ShootingRangeComponent } from './Facilities/shooting-range/shooting-range.component';
import { SmartClassComponent } from './Facilities/smart-class/smart-class.component';
import { SportsGamesComponent } from './Facilities/sports-games/sports-games.component';
import { TransportComponent } from './Facilities/transport/transport.component';
import { AnnouncementComponent } from './Home-Dropdown/announcement/announcement.component';
import { HomeAboutComponent } from './Home-Dropdown/home-about/home-about.component';
import { NotificationComponent } from './Home-Dropdown/notification/notification.component';
import { OurMissionComponent } from './Home-Dropdown/our-mission/our-mission.component';
import { OurMottoComponent } from './Home-Dropdown/our-motto/our-motto.component';
import { OurVisionComponent } from './Home-Dropdown/our-vision/our-vision.component';
import { QuotesComponent } from './Home-Dropdown/quotes/quotes.component';
import { SliderComponent } from './Home-Dropdown/slider/slider.component';
import { TodayBirthdayComponent } from './Home-Dropdown/today-birthday/today-birthday.component';
import { VideoComponent } from './Home-Dropdown/video/video.component';

// import { TeacherComponent } from './admin/teacher/teacher.component';
import { HomeComponent } from './home/home.component';
import { AddImageComponent } from './Image-Gallery/add-image/add-image.component';
import { VideoGalleryComponent } from './Image-Gallery/video-gallery/video-gallery.component';
import { ImportantlinkComponent } from './importantlink/importantlink.component';
import { LogoutComponent } from './Log-out/logout/logout.component';
// import { AuthGuard } from './jwtservice/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent, },
  // {
  //   path:"gallery", component:GalleryComponent,
    
    
  // },
  {
    path:"photo-gallery", component:PhotoGalleryComponent,
    
    
  },
  // {
  //   path:"importantlinks",
  //   component:ImportantlinksComponent,
    
  // },
//   {
//     path:"admission",
//     component:AdmissionsComponent,
    
//   },
//   {
//     path:"notice",
//     component:NoticeComponent,
    
// },
//   {
//     path:"teacher",
//     component:TeacherComponent,
    
//   },
//   {
//     path:"login",
//     component:LoginComponent,
    
//   },
  // {
  //   path:"registertion", component:RegisterationComponent
  // } ,
  {
    path:"home", component:HomeComponent
  },
  {
    path:"dashboard",component:DashboardComponent
  }, 
  {
    path:"slider",component:SliderComponent
  },
  {
    path:"announcement",component:AnnouncementComponent
  },
  {
    path:"home-about",component:HomeAboutComponent
  },
  {
    path:"notification",component:NotificationComponent
  },
  {
    path:"our-mission",component:OurMissionComponent
  },
  {
    path:"our-motto",component:OurMottoComponent
  },
  {
    path:"our-vision",component:OurVisionComponent
  },
  {
    path:"quotes",component:QuotesComponent
  },
  {
    path:"today-birthday",component:TodayBirthdayComponent
  },
  {
    path:"video",component:VideoComponent
  },
  {
    path:"about-lips",component:AboutLIPSComponent
  },
  
  {
    path:"visionand-mission",component:VisionandMissionComponent
  },
  {
    path:"chairman-message",component:ChairmanMessageComponent
  },
  
  {
    path:"principal-message",component:PrincipalMessageComponent
  },
  {
    path:"ceomessage",component:CEOMessageComponent
  },
  {
    path:"admission-procedure",component:AdmissionProcedureComponent
  },
  {
    path:"prospectus",component:ProspectusComponent
  },
  
  {
    path:"why-lips",component:WhyLIPSComponent
  },
  
  {
    path:"biology-lab",component:BiologyLabComponent
  },
  
  {
    path:"cctvsceurity",component:CCTVSceurityComponent
  },
  {
    path:"chemistry-lab",component:ChemistryLabComponent
  },
  {
    path:"computer-lab",component:ComputerLabComponent
  },
  {
    path:"conference-hall",component:ConferenceHallComponent
  },
  {
    path:"dance-room",component:DanceRoomComponent
  },
  {
    path:"doctorson-campous",component:DoctorsonCampousComponent
  },
  {
    path:"health-medicine",component:HealthMedicineComponent
  },
  {
    path:"interhouse-competition",component:InterhouseCompetitionComponent
  },
  {
    path:"library",component:LibraryComponent
  },
  {
    path:"music-room",component:MusicRoomComponent
  },
  {
    path:"physics-lab",component:PhysicsLabComponent
  },
  {
    path:"preprimary-block",component:PreprimaryBlockComponent
  },
  {
    path:"professional-security",component:ProfessionalSecurityComponent
  },
  {
    path:"security-inside-campous",component:SecurityInsideCampousComponent
  },
  {
    path:"shooting-range",component:ShootingRangeComponent
  },
  {
    path:"smart-class",component:SmartClassComponent
  },
  {
    path:"sports-games",component:SportsGamesComponent
  },
  {
    path:"transport",component:TransportComponent
  },
  {
    path:"acadmic-exam",component:AcadmicExamComponent
  },
  {
    path:"listof-books",component:ListofBooksComponent
  },
  {
    path:"listof-holidays",component:ListofHolidaysComponent
  },
  {
    path:"news-letters",component:NewsLettersComponent
  },
  {
    path:"sachalaction",component:SachalactionComponent
  },
  {
    path:"list-of-holidays",component:ListofHolidaysComponent
  },
  {
    path:"list-of-",component:ListofHolidaysComponent
  },
  {
    path:"school-uniform",component:SchoolUniformComponent
  },
  {
    path:"download-files",component:DownloadFilesComponent
  },
  {
    path:"add-image",component:AddImageComponent
  },
  {
    path:"add-image-cartegory",component:AddImageComponent
  },
  {
    path:"video-gallery",component:VideoGalleryComponent
  },
  {
    path:"our-achivements",component:OurAchivementsComponent
  },
  {
    path:"career-table",component:CareerTableComponent
  },
  {
    path:"contact-us-table",component:ContactUsTableComponent
  },
  {
    path:"logout",component:LogoutComponent
  },
  {
    path:"importantlink",component:ImportantlinkComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
