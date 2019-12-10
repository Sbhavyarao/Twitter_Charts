import {Component, NgZone, OnInit} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-semipiechart',
  templateUrl: './semipiechart.component.html',
  styleUrls: ['./semipiechart.component.css']
})
export class SemipiechartComponent implements OnInit {

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("semipiechart", am4charts.PieChart);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in


      chart.data = [
        {"count":13411,"Device":"iPad"},
        {"count":215981,"Device":"Android"},
        {"count":191583,"Device":"iPhone"},
        {"count":5,"Device":"web"}
      ];
      let title = chart.titles.create();
      title.text = 'Devices percentage used for tweeting';
      title.fontSize = 22;
      title.fontWeight = '500';
      chart.radius = am4core.percent(70);
      chart.innerRadius = am4core.percent(40);
      chart.startAngle = 180;
      chart.endAngle = 360;

      let series = chart.series.push(new am4charts.PieSeries());
      series.dataFields.value = "count";
      series.dataFields.category = "Device";

      series.slices.template.cornerRadius = 10;
      series.slices.template.innerCornerRadius = 7;
      series.slices.template.draggable = false;
      series.slices.template.inert = true;
      series.alignLabels = false;

      series.hiddenState.properties.startAngle = 90;
      series.hiddenState.properties.endAngle = 90;

      chart.legend = new am4charts.Legend();

    });
  }
}
