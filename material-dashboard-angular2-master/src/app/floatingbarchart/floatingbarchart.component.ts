import { Component, NgZone , OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-floatingbarchart',
  templateUrl: './floatingbarchart.component.html',
  styleUrls: ['./floatingbarchart.component.css']
})
export class FloatingbarchartComponent implements OnInit {

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create('fBarChart', am4charts.XYChart3D);
      chart.data = [{
        "followers_count":51929,
        "screen_name":"Aetna",
        "color": chart.colors.next()
      }, {
        "followers_count":13578,
        "screen_name":"Highmark",
        "color": chart.colors.next()
      }, {
        "followers_count":27678,
        "screen_name":"BCBSAssociation",
        "color": chart.colors.next()
      }, {
        "followers_count":4907175,
        "screen_name":"WHO",
        "color": chart.colors.next()
      }, {
        "followers_count":157868,
        "screen_name":"CMSGov",
        "color": chart.colors.next()
      },{
        "followers_count":18821,
        "screen_name":"MayoClinicHS",
        "color": chart.colors.next()
      }];
      let title = chart.titles.create();
      title.text = 'Followers count of Health Organisations';
      title.fontSize = 22;
      title.fontWeight = '500';
// Create axes
      let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "screen_name";
      categoryAxis.numberFormatter.numberFormat = "#";
      categoryAxis.renderer.inversed = true;

      let  valueAxis = chart.xAxes.push(new am4charts.ValueAxis());

// Create series
      let series = chart.series.push(new am4charts.ColumnSeries3D());
      series.dataFields.valueX = "followers_count";
      series.dataFields.categoryY = "screen_name";
      series.name = "followers count";
      series.columns.template.propertyFields.fill = "color";
      series.columns.template.tooltipText = "{valueX}";
      series.columns.template.column3D.stroke = am4core.color("#fff");
      series.columns.template.column3D.strokeOpacity = 0.2;
    });
  }
}

