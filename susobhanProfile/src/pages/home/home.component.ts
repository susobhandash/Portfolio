import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  texts_for_display = [
    "Around 6 years of experience in Front End Technologies",
    "Hard Wokring Passionate to learn new technologies",
    "Interested in developing reusable components and libraries",
    "Proficient in Angular 6+, JS and CSS and many 3rd party libraries"
  ];
  private typeWriterText: string = "Around 4 years of experience in Front End Technologies";
  typeWriterDisplayText: string = "";
  
  constructor() { }

  ngOnInit(): void {
    // this.getNextText();
    this.typeWriterText= "Around 6 years of experience in Front End Technologies";
    this.typingCallback(this);
  }

  typingCallback(that) {
    if (that.typeWriterText && that.typeWriterText.length > 0) {
      let total_length = that.typeWriterText.length;
      let current_length = that.typeWriterDisplayText.length;
      if (current_length < total_length) {
        that.typeWriterDisplayText += that.typeWriterText[current_length];
        setTimeout(that.typingCallback, 150, that);
      } else {
        that.typeWriterDisplayText = "";
        that.getNextText(that);
      }
    } else {
      console.log('');
    }
  }

  getNextText(that) {
    const next_text = that.texts_for_display[Math.floor(Math.random() * that.texts_for_display.length)];
    if (next_text !== that.typeWriterText) {
      that.typeWriterText = next_text;
      that.typingCallback(that);
    } else {
      that.getNextText(that);
    }
  }

}
