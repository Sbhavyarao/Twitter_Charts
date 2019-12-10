import { Routes } from '@angular/router';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {CoursesComponent} from '../../courses/courses.component';
import {VideotutorialsComponent} from '../../videotutorials/videotutorials.component';
import {SyllabusComponent} from '../../syllabus/syllabus.component'
import {TagcloudComponent} from '../../tagcloud/tagcloud.component'
import {XYchart3dComponent} from '../../xychart3d/xychart3d.component'
import {DonutComponent} from '../../donut/donut.component';
import {SemipiechartComponent} from '../../semipiechart/semipiechart.component';
import {ImgbarchartComponent} from '../../imgbarchart/imgbarchart.component';
import {BarchartComponent} from '../../barchart/barchart.component';
import {PiechartComponent} from '../../piechart/piechart.component';
import {ImgcoulmnchartComponent} from '../../imgcoulmnchart/imgcoulmnchart.component';
import {LinechartComponent} from '../../linechart/linechart.component';
import {BubblechartComponent} from '../../bubblechart/bubblechart.component';
import {TreemapComponent} from '../../treemap/treemap.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'tagCloud',   component: TagcloudComponent },
    { path: 'languages',  component: XYchart3dComponent },
    { path: 'geoLocation',  component: TreemapComponent },
    { path: 'sensitivity',  component: DonutComponent },
    { path: 'devices',  component: SemipiechartComponent },
    { path: 'countries',  component: ImgbarchartComponent },
    { path: 'followersCount',   component: BarchartComponent },
    { path: 'ncdPromoters',  component: PiechartComponent },
    { path: 'activeUsers',  component: ImgcoulmnchartComponent },
    { path: 'healthOrganisations',  component: LinechartComponent },
    { path: 'holisticData',  component: BubblechartComponent},
];
