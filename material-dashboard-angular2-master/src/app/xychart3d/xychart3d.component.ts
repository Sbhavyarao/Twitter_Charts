import {Component, NgZone, OnInit} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-xychart3d',
  templateUrl: './xychart3d.component.html',
  styleUrls: ['./xychart3d.component.scss']
})
export class XYchart3dComponent  implements OnInit {

  constructor(private zone: NgZone) {
  }
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chart", am4charts.XYChart3D);
      chart.paddingBottom = 30;
      chart.angle = 35;
      /*
              chart.data = [
                {"count":5038,"location":"Lagos, Nigeria"},
                {"count":4401,"location":"London, England"},
                {"count":3764,"location":"United States"},
                {"count":3339,"location":"India"},
                {"count":3201,"location":"Nigeria"},
                {"count":3055,"location":"United Kingdom"},
                {"count":2881,"location":"London"},
                {"count":2619,"location":"England, United Kingdom"},
                {"count":2503,"location":"Republic of the Philippines"},
                {"count":2108,"location":"Malaysia"},
                {"count":2043,"location":"South Africa"},
                {"count":1978,"location":"California, USA"},
                {"count":1961,"location":"UK"},
                {"count":1804,"location":"Los Angeles, CA"},
                {"count":1722,"location":"Nairobi, Kenya"},
                {"count":1657,"location":"Johannesburg, South Africa"},
                {"count":1467,"location":"Australia"},
                {"count":1242,"location":"Abuja, Nigeria"},
                {"count":1069,"location":"USA"},
                {"count":1027,"location":"Mumbai, India"}];
      */
      chart.data = [
        {"count":493057,"Language":"en"},
        {"count":8376,"Language":"und"},
        {"count":2420,"Language":"tl"},
        {"count":2157,"Language":"fr"},
        {"count":1726,"Language":"in"},
        {"count":1394,"Language":"ja"},
        {"count":1142,"Language":"es"},
        {"count":770,"Language":"th"},
        {"count":558,"Language":"hi"},
        {"count":486,"Language":"pt"}];
      let title = chart.titles.create();
      title.text = 'List of Tweeted Languages';
      title.fontSize = 22;
      title.fontWeight = '500';
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "Language";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 20;
      categoryAxis.renderer.inside = true;
      categoryAxis.renderer.grid.template.disabled = true;

      let labelTemplate = categoryAxis.renderer.labels.template;
      labelTemplate.rotation = -90;
      labelTemplate.horizontalCenter = "left";
      labelTemplate.verticalCenter = "middle";
      labelTemplate.dy = 10; // moves it a bit down;
      labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.grid.template.disabled = true;

// Create series
      let series = chart.series.push(new am4charts.ConeSeries());
      series.dataFields.valueY = "count";
      series.dataFields.categoryX = "Language";

      let columnTemplate = series.columns.template;
      columnTemplate.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });
      columnTemplate.adapter.add("stroke", function(stroke, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });
    });
  }
}
