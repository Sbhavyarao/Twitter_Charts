import { Component, NgZone , OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-bubblechart',
  templateUrl: './bubblechart.component.html',
  styleUrls: ['./bubblechart.component.css']
})
export class BubblechartComponent implements OnInit {

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create('bubbleChart', am4plugins_forceDirected.ForceDirectedTree);

      let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

      series.data = [
        {
        name: 'World Health Organization (WHO)',
        children: [{name: 'followers_count', value: 4907175}, {name: 'friends_count',  value: 1736} ,
          {name: 'location', value: 'Geneva, Switzerland'}, {name: 'created_at', value: 'Wed Apr 23 19:56:27 +0000 2008'}]
        },
        {
          name: 'CMSGov',
          children: [{name: 'followers_count', value: 4907175}, {name: 'friends_count',  value: 1736} ,
            {name: 'location', value: "Geneva, Switzerland"},{name: 'created_at', value: "Wed Apr 23 19:56:27 +0000 2008"}]
        },
        {
          name: 'Aetna',
          children: [{name: 'followers_count', value: 4907175}, {name: 'friends_count',  value: 1736} ,
            {name: 'location', value: "Geneva, Switzerland"},{name: 'created_at', value: "Wed Apr 23 19:56:27 +0000 2008"}]
        },
        {
          name: 'BCBSA Tweets',
          children: [{name: 'followers_count', value: 4907175}, {name: 'friends_count',  value: 1736} ,
            {name: 'location', value: "Geneva, Switzerland"},{name: 'created_at', value: "Wed Apr 23 19:56:27 +0000 2008"}]
        },
        {
          name: 'Highmark',
          children: [{name: 'followers_count', value: 4907175}, {name: 'friends_count',  value: 1736} ,
            {name: 'location', value: "Geneva, Switzerland"}, {name: 'created_at', value: "Wed Apr 23 19:56:27 +0000 2008"}]
        }];
      let title = chart.titles.create();
      title.text = 'Holistic view of twitter data';
      title.fontSize = 22;
      title.fontWeight = '500';
      series.dataFields.value = "value";
      series.dataFields.name = "name";
      series.dataFields.children = "children";
      series.nodes.template.tooltipText = "{name}: {value}";

// Add labels
      series.nodes.template.label.text = "{name}";
      series.fontSize = 10;
      series.minRadius = 35;
      series.maxRadius = 60;
    });
  }
}

