import { Component, OnInit, OnDestroy } from '@angular/core';

interface IOption {
  title: string;
  value: string;
}

@Component({
  selector: 'app-lost-password',
  templateUrl: './lost-password.component.html',
  styleUrls: ['./lost-password.component.scss']
})
export class LostPasswordComponent implements OnInit, OnDestroy {
  options: IOption[] = [{
    title: "What is your favorite color?",
    value: "color"
  }, {
    title: "What is the current time?",
    value: "time"
  }, {
    title: "What did you have for breakfast?",
    value: "breakfast"
  }, {
    title: "Which security question did you choose?",
    value: "question"
  }];
  question: string = null;
  intervalHandle: number;
  time: Date;

  constructor() { }

  ngOnInit() {
    this.intervalHandle = window.setInterval(() => {
      this.time = new Date();
    }, 10);
  }

  ngOnDestroy(): void {
    window.clearInterval(this.intervalHandle);
  }
}
