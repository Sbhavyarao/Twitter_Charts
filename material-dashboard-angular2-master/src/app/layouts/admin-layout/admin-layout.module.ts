import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { CoursesComponent } from '../../courses/courses.component';
import { VideotutorialsComponent } from '../../videotutorials/videotutorials.component';
import { SyllabusComponent } from '../../syllabus/syllabus.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DatePickerModule} from '@progress/kendo-angular-dateinputs';
import {TagcloudComponent} from '../../tagcloud/tagcloud.component';
import {XYchart3dComponent} from '../../xychart3d/xychart3d.component';
import {DonutComponent} from '../../donut/donut.component';
import {SemipiechartComponent} from '../../semipiechart/semipiechart.component';
import {ImgbarchartComponent} from '../../imgbarchart/imgbarchart.component';
import {BarchartComponent} from '../../barchart/barchart.component';
import {PiechartComponent} from '../../piechart/piechart.component';
import {ImgcoulmnchartComponent} from '../../imgcoulmnchart/imgcoulmnchart.component';
import {LinechartComponent} from '../../linechart/linechart.component';
import {BubblechartComponent} from '../../bubblechart/bubblechart.component';
import {TreemapComponent} from '../../treemap/treemap.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatDatepickerModule,
        DatePickerModule,
    ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    MapsComponent,
    NotificationsComponent,
    CoursesComponent,
    VideotutorialsComponent,
    SyllabusComponent,
      TagcloudComponent,
      XYchart3dComponent,
      DonutComponent,
      SemipiechartComponent,
      ImgbarchartComponent,
      BarchartComponent,
      PiechartComponent,
      ImgcoulmnchartComponent,
      LinechartComponent,
      BubblechartComponent,
      TreemapComponent
  ]
})

export class AdminLayoutModule {}
