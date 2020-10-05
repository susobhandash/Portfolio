import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  progressOptions = {
    height: 20,
    bgColor: '#f56c6d',
    progressBgColor: '#b2b6ba',
    time: '300',
    displayValue: true,
    striped: true,
    stripeAnimated: true,
    timingFunc: 'ease',
    textColor: '#fff'
  };

  constructor() { }

  ngOnInit(): void {
  }

  clickOnSvg(evt) {
    console.log(evt);
  }

}
