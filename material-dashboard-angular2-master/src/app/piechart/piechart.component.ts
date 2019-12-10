import {Component, NgZone, OnInit} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create('piechart', am4charts.PieChart3D);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
      chart.legend = new am4charts.Legend();

      chart.data = [
        {"count":5,"Org":"Highmark"},
        {"count":3,"Org":"MayoClinicHS"},
        {"count":3,"Org":"WHO"},
        {"count":2,"Org":"BCBSAssociation"}

      ];
      let title = chart.titles.create();
      title.text = 'NCD tweets count by Health Institutions';
      title.fontSize = 22;
      title.fontWeight = '500';
      let series = chart.series.push(new am4charts.PieSeries3D());
      series.dataFields.value = "count";
      series.dataFields.category = "Org";
   });
  }
}
