import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
// import { NoticeComponent } from './admin/notice/notice.component';
// import { ImportantlinksComponent } from './admin/importantlinks/importantlinks.component';
// import { GalleryComponent } from './admin/gallery/gallery.component';
// import { AdmissionsComponent } from './admin/admissions/admissions.component';
// import { TeacherComponent } from './admin/teacher/teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
// import { BasicAuthHtppInterceptorService } from './jwtservice/basic-auth-interceptor.service';
import { RegisterationComponent } from './admin/registeration/registeration.component';
import { PhotoGalleryComponent } from './admin/photo-gallery/photo-gallery.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { AboutLIPSComponent } from './About-Dropdown/about-lips/about-lips.component';
import { VisionandMissionComponent } from './About-Dropdown/visionand-mission/visionand-mission.component';
import { CEOMessageComponent } from './About-Dropdown/ceomessage/ceomessage.component';
import { ChairmanMessageComponent } from './About-Dropdown/chairman-message/chairman-message.component';
import { PrincipalMessageComponent } from './About-Dropdown/principal-message/principal-message.component';

import { PreprimaryBlockComponent } from './Facilities/preprimary-block/preprimary-block.component';
import { SmartClassComponent } from './Facilities/smart-class/smart-class.component';
import { LibraryComponent } from './Facilities/library/library.component';
import { ComputerLabComponent } from './Facilities/computer-lab/computer-lab.component';
import { PhysicsLabComponent } from './Facilities/physics-lab/physics-lab.component';
import { ChemistryLabComponent } from './Facilities/chemistry-lab/chemistry-lab.component';
import { BiologyLabComponent } from './Facilities/biology-lab/biology-lab.component';
import { SportsGamesComponent } from './Facilities/sports-games/sports-games.component';
import { TransportComponent } from './Facilities/transport/transport.component';
import { HealthMedicineComponent } from './Facilities/health-medicine/health-medicine.component';
import { ConferenceHallComponent } from './Facilities/conference-hall/conference-hall.component';
import { ShootingRangeComponent } from './Facilities/shooting-range/shooting-range.component';
import { InterhouseCompetitionComponent } from './Facilities/interhouse-competition/interhouse-competition.component';
import { CCTVSceurityComponent } from './Facilities/cctvsceurity/cctvsceurity.component';
import { DoctorsonCampousComponent } from './Facilities/doctorson-campous/doctorson-campous.component';
import { ProfessionalSecurityComponent } from './Facilities/professional-security/professional-security.component';
import { SecurityInsideCampousComponent } from './Facilities/security-inside-campous/security-inside-campous.component';
import { DanceRoomComponent } from './Facilities/dance-room/dance-room.component';
import { MusicRoomComponent } from './Facilities/music-room/music-room.component';
import { SachalactionComponent } from './Acadmic/sachalaction/sachalaction.component';
import { ListofHolidaysComponent } from './Acadmic/listof-holidays/listof-holidays.component';
import { AcadmicExamComponent } from './Acadmic/acadmic-exam/acadmic-exam.component';
import { SchoolUniformComponent } from './Acadmic/school-uniform/school-uniform.component';
import { ListofBooksComponent } from './Acadmic/listof-books/listof-books.component';
import { NewsLettersComponent } from './Acadmic/news-letters/news-letters.component';
import { DownloadFilesComponent } from './Downloads/download-files/download-files.component';
import { AddImageCartegoryComponent } from './Image-Gallery/add-image-cartegory/add-image-cartegory.component';
import { AddImageComponent } from './Image-Gallery/add-image/add-image.component';
import { VideoGalleryComponent } from './Image-Gallery/video-gallery/video-gallery.component';
import { OurAchivementsComponent } from './Achivements/our-achivements/our-achivements.component';
import { CareerTableComponent } from './Career/career-table/career-table.component';
import { LogoutComponent } from './Log-out/logout/logout.component';
import { WhyLIPSComponent } from './Admission/why-lips/why-lips.component';
import { OurMottoComponent } from './Home-Dropdown/our-motto/our-motto.component';
import { TodayBirthdayComponent } from './Home-Dropdown/today-birthday/today-birthday.component';
import { OurVisionComponent } from './Home-Dropdown/our-vision/our-vision.component';
import { VideoComponent } from './Home-Dropdown/video/video.component';
import { HomeAboutComponent } from './Home-Dropdown/home-about/home-about.component';
import { QuotesComponent } from './Home-Dropdown/quotes/quotes.component';
import { OurMissionComponent } from './Home-Dropdown/our-mission/our-mission.component';
import { AdmissionProcedureComponent } from './Admission/admission-procedure/admission-procedure.component';
import { ProspectusComponent } from './Admission/prospectus/prospectus.component';
import { SliderComponent } from './Home-Dropdown/slider/slider.component';
import { AnnouncementComponent } from './Home-Dropdown/announcement/announcement.component';
import { NotificationComponent } from './Home-Dropdown/notification/notification.component';
import { ContactUsTableComponent } from './Contact-Us/contact-us-table/contact-us-table.component';
import { ImportantlinkComponent } from './importantlink/importantlink.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RegisterationComponent,
    PhotoGalleryComponent,
    DashboardComponent,
    SliderComponent,
    AnnouncementComponent,
    NotificationComponent,
    HomeAboutComponent,
    QuotesComponent,
    VideoComponent,
    OurMissionComponent,
    OurVisionComponent,
    OurMottoComponent,
    TodayBirthdayComponent,
    AboutLIPSComponent,
    VisionandMissionComponent,
    CEOMessageComponent,
    ChairmanMessageComponent,
    PrincipalMessageComponent,
    AdmissionProcedureComponent,
    ProspectusComponent,
    WhyLIPSComponent,
    PreprimaryBlockComponent,
    SmartClassComponent,
    LibraryComponent,
    ComputerLabComponent,
    PhysicsLabComponent,
    ChemistryLabComponent,
    BiologyLabComponent,
    SportsGamesComponent,
    TransportComponent,
    HealthMedicineComponent,
    ConferenceHallComponent,
    ShootingRangeComponent,
    InterhouseCompetitionComponent,
    CCTVSceurityComponent,
    DoctorsonCampousComponent,
    ProfessionalSecurityComponent,
    SecurityInsideCampousComponent,
    DanceRoomComponent,
    MusicRoomComponent,
    SachalactionComponent,
    ListofHolidaysComponent,
    AcadmicExamComponent,
    SchoolUniformComponent,
    ListofBooksComponent,
    NewsLettersComponent,
    DownloadFilesComponent,
    AddImageCartegoryComponent,
    AddImageComponent,
    VideoGalleryComponent,
    OurAchivementsComponent,
    CareerTableComponent,
    ContactUsTableComponent,
    LogoutComponent,
    ImportantlinkComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
