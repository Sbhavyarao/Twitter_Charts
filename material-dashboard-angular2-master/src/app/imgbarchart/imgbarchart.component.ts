import { Component, NgZone , OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-imgbarchart',
  templateUrl: './imgbarchart.component.html',
  styleUrls: ['./imgbarchart.component.css']
})
export class ImgbarchartComponent implements OnInit {

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create('imgBarChart', am4charts.XYChart);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

      chart.data = [{"count":5038,"location":"Nigeria"},
        {"count":4401,"location":"England"},
        {"count":3764,"location":"United States"},
        {"count":3339,"location":"India"},
        {"count":3055,"location":"United Kingdom"},
        {"count":2503,"location":"Republic of the Philippines"},
        {"count":2108,"location":"Malaysia"},
        {"count":2043,"location":"South Africa"},
        {"count":1722,"location":"Kenya"},
        {"count":1467,"location":"Australia"}];
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.dataFields.category = "location";
      categoryAxis.renderer.minGridDistance = 40;
      categoryAxis.fontSize = 11;
      categoryAxis.renderer.labels.template.dy = 5;



      let image = new am4core.Image();
      image.horizontalCenter = "middle";
      image.width = 20;
      image.height = 20;
      image.verticalCenter = "middle";
      image.adapter.add("href", (href, target) => {
        /*let category = target.dataItem.category;
        if(category){
          return 'https://www.amcharts.com/wp-content/uploads/flags/' + category.split(" ").join("-").toLowerCase() + ".svg";
        }*/
        return href;
      })
      categoryAxis.dataItems.template.bullet = image;



      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.renderer.minGridDistance = 30;
      valueAxis.renderer.baseGrid.disabled = true;

      let title = chart.titles.create();
      title.text = 'Geographical distribution of tweets';
      title.fontSize = 22;
      title.fontWeight = '500';
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryX = "location";
      series.dataFields.valueY = "count";
      series.columns.template.tooltipText = '{valueY.value}';
      series.columns.template.tooltipY = 0;
      series.columns.template.strokeOpacity = 0;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
      series.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      });

    });
  }
}

