import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/languages', title: 'Languages',  icon: '', class: '' },
    { path: '/tagCloud', title: 'Hashtags',  icon: '', class: '' },
    { path: '/geoLocation', title: 'Geo Locations',  icon:'', class: '' },
    { path: '/sensitivity', title: 'Data Sensitivity',  icon:'', class: '' },
    { path: '/devices', title: 'Devices',  icon:'', class: '' },
    { path: '/countries', title: 'Countries',  icon:'', class: '' },
    { path: '/followersCount', title: 'Followers Count ',  icon:'', class: '' },
    { path: '/ncdPromoters', title: 'NCD Promoters',  icon:'', class: '' },
    { path: '/activeUsers', title : 'Active Users' , icon:'' , class: ''},
    { path: '/healthOrganisations', title: 'Tweets - Health organisations',  icon:'', class: '' },
    { path: '/holisticData', title : 'Holistic Data' , icon:'' , class: ''},
    { path: '/holisticData', title : 'Holistic Data' , icon:'' , class: ''}

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
