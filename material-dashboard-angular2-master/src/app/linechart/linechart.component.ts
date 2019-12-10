import { Component, NgZone , OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create('lineChart', am4charts.XYChart);
      chart.data = [{"count":747,"Org":"Mayo clinic"},
        {"count":17,"Org":"Aetna"},
        {"count":104,"Org":"Cerner"},
        {"count":18,"Org":"WHO"}
        ];
      let title = chart.titles.create();
      title.text = 'Count of tweets tweeted on Health Organizations';
      title.fontSize = 22;
      title.fontWeight = '500';
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.ticks.template.disabled = true;
      categoryAxis.renderer.line.opacity = 0;
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.minGridDistance = 40;
      categoryAxis.dataFields.category = "Org";
      categoryAxis.startLocation = 0.4;
      categoryAxis.endLocation = 0.6;


      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.line.opacity = 0;
      valueAxis.renderer.ticks.template.disabled = true;
      valueAxis.min = 0;

      let lineSeries = chart.series.push(new am4charts.LineSeries());
      lineSeries.dataFields.categoryX = "Org";
      lineSeries.dataFields.valueY = "count";
      lineSeries.tooltipText = "count: {valueY.value}";
      lineSeries.fillOpacity = 0.5;
      lineSeries.strokeWidth = 3;
      lineSeries.propertyFields.stroke = "lineColor";
      lineSeries.propertyFields.fill = "lineColor";

      let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
      bullet.circle.radius = 6;
      bullet.circle.fill = am4core.color("#fff");
      bullet.circle.strokeWidth = 3;

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "panX";
      chart.cursor.lineX.opacity = 0;
      chart.cursor.lineY.opacity = 0;

      chart.scrollbarX = new am4core.Scrollbar();
      chart.scrollbarX.parent = chart.bottomAxesContainer;    });
  }
}

