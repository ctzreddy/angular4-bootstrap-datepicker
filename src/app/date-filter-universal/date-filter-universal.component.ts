import { Component, OnInit, AfterViewInit, Input, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-date-filter-universal',
  templateUrl: './date-filter-universal.component.html',
  styleUrls: ['./date-filter-universal.component.css']
})
export class DateFilterUniversalComponent implements OnInit, AfterViewInit {
  headerTitle = 'https://bootstrap-datepicker.readthedocs.io/en/latest/#';

  constructor(public element: ElementRef) {

  }

  public ngOnInit(): void {
  }

  public onShowAddressChange(showAddress): void {
    showAddress = showAddress;
  }

  public ngAfterViewInit(): void {

    const datePicker = $(this.element.nativeElement).find('div.date-picker-initializerdiv > div');
    datePicker.datepicker('destroy');

    const options: object = {
      format: 'dd/mm/yyyy',
      weekStart: 1
    };

    datePicker.datepicker(options);
  }
}
