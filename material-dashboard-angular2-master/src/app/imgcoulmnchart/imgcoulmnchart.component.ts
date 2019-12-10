import { Component, NgZone , OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-imgcoulmnchart',
  templateUrl: './imgcoulmnchart.component.html',
  styleUrls: ['./imgcoulmnchart.component.css']
})
export class ImgcoulmnchartComponent implements OnInit {

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create('imgColumnChart', am4charts.XYChart);
      chart.data = [{
        "count":23,
        "User":"DukeCondet",
        "color": chart.colors.next(),
        "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"
      }, {
        "count":21,
        "User":"sdgnigeria",
        "color": chart.colors.next(),
        "bullet": "https://www.amcharts.com/lib/images/faces/C02.png"
      }, {
        "count":18,
        "User":"akeula_trendy",
        "color": chart.colors.next(),
        "bullet": "https://www.amcharts.com/lib/images/faces/D02.png"
      }, {
        "count":15,
        "User":"Rajeevsanwariy2",
        "color": chart.colors.next(),
        "bullet": "https://www.amcharts.com/lib/images/faces/E01.png"
      },{
        "count":15,
        "User":"FadindingManneh",
        "color": chart.colors.next(),
        "bullet": "https://www.amcharts.com/lib/images/faces/F04.png"
      }, {
        "count":12,
        "User":"AussieEmu",
        "color": chart.colors.next(),
        "bullet": "https://www.amcharts.com/lib/images/faces/G01.png"
      }, {
        "count":11,
        "User":"SuzanMilitan",
        "color": chart.colors.next(),
        "bullet": "https://www.amcharts.com/lib/images/faces/H01.png"
      }, {
        "count":10,
        "User":"Paws5464",
        "color": chart.colors.next(),
        "bullet": "https://www.amcharts.com/lib/images/faces/K01.png"
      }, {
        "count":10,
        "User":"RuthALovell",
        "color": chart.colors.next(),
        "bullet": "https://www.amcharts.com/lib/images/faces/L01.png"
      }, {
        "count":9,
        "User":"muhammad_ridhaa",
        "color": chart.colors.next(),
        "bullet": "https://www.amcharts.com/lib/images/faces/M01.png"
      }];
      let title = chart.titles.create();
      title.text = 'Top 10 Tweeted Users';
      title.fontSize = 22;
      title.fontWeight = '500';
// Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "User";
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.minGridDistance = 0;
      categoryAxis.renderer.inside = true;
      categoryAxis.renderer.labels.template.fill = am4core.color("#fff");
      categoryAxis.renderer.labels.template.fontSize = 20;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.grid.template.strokeDasharray = "4,4";
      valueAxis.renderer.labels.template.disabled = true;
      valueAxis.min = 0;

// Do not crop bullets
      chart.maskBullets = false;

// Remove padding
      chart.paddingBottom = 0;

// Create series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "count";
      series.dataFields.categoryX = "User";
      series.columns.template.propertyFields.fill = "color";
      series.columns.template.propertyFields.stroke = "color";
      series.columns.template.column.cornerRadiusTopLeft = 15;
      series.columns.template.column.cornerRadiusTopRight = 15;
      series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/b]";

// Add bullets
      let bullet = series.bullets.push(new am4charts.Bullet());
      let image = bullet.createChild(am4core.Image);
      image.horizontalCenter = "middle";
      image.verticalCenter = "bottom";
      image.dy = 20;
      image.y = am4core.percent(100);
      image.propertyFields.href = "bullet";
      image.tooltipText = series.columns.template.tooltipText;
      image.propertyFields.fill = "color";
      image.filters.push(new am4core.DropShadowFilter());
    });
  }
}

