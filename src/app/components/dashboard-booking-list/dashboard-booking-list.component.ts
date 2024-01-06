import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { combineLatest, startWith, map } from 'rxjs';
import { Booking } from 'src/app/interfaces/booking';
import { BookingService } from 'src/app/services/booking.service';
import { DialogService } from 'src/app/services/dialog.service';
import { BookingAddComponent } from '../booking-add/booking-add.component';
import { BookingDeleteComponent } from '../booking-delete/booking-delete.component';
import { BookingEditComponent } from '../booking-edit/booking-edit.component';

@Component({
  selector: 'app-dashboard-booking-list',
  templateUrl: './dashboard-booking-list.component.html',
  styles: [],
})
export class DashboardBookingListComponent {
  bookings: Booking[] = [];

  displayedColumns: string[] = [
    'id',
    'name',
    'startTime',
    'endTime',
    'bookingDate',
    'phone',
    'actions',
  ];

  searchForm = this.fb.group({
    name: [''],
    startDate: [''],
    endDate: [''],
  });

  constructor(
    private bookingService: BookingService,
    private dialogService: DialogService,
    private datePipe: DatePipe,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    const today = new Date();
    this.bookingService.bookings$.subscribe((updatedBookings) => {
      const todayBookings = updatedBookings.filter((booking) => {
        const bookingDate = new Date(booking.bookingDate);
        return (
          bookingDate.getDate() === today.getDate() &&
          bookingDate.getMonth() === today.getMonth() &&
          bookingDate.getFullYear() === today.getDate()
        );
      });
      this.bookings = todayBookings;
    });
    // this.bookings$ = combineLatest([
    //   this.bookingService.bookings$,
    //   this.searchForm.valueChanges.pipe(startWith(this.searchForm.value)),
    // ]).pipe(
    //   map(([bookings, searchFormValue]) => {
    //     const filteredBookings = bookings.filter((booking) => {
    //       const nameCondition =
    //         !searchFormValue.name ||
    //         booking.name
    //           .toLowerCase()
    //           .includes(searchFormValue.name.toLowerCase());
    //       const bookingDate = new Date(booking.bookingDate);
    //       const startDate = new Date(searchFormValue.startDate!);
    //       const endDate = new Date(searchFormValue.endDate!);
    //       endDate.setHours(23, 59, 59, 999);
    //       const dateCondition =
    //         !searchFormValue.startDate ||
    //         !searchFormValue.endDate ||
    //         (bookingDate >= startDate && bookingDate <= endDate);
    //       return nameCondition && dateCondition;
    //     });
    //     return filteredBookings;
    //   })
    // );
  }

  addBooking() {
    this.dialogService.open(BookingAddComponent, null);
  }

  editBooking(booking: Booking) {
    this.dialogService.open(BookingEditComponent, booking);
  }

  deleteBooking(bookingId: string) {
    this.dialogService.open(BookingDeleteComponent, bookingId);
  }

  parseTime(timeString: string) {
    const date = new Date();
    const [hour, min] = timeString.split(':');
    date.setHours(Number(hour), Number(min));
    return this.datePipe.transform(date, 'hh:mm a');
  }
}
