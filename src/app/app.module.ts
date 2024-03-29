import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoardListComponent } from './components/board-list/board-list.component';
import { BoardAddComponent } from './components/board-add/board-add.component';
import { BoardEditComponent } from './components/board-edit/board-edit.component';
import { BoardDeleteComponent } from './components/board-delete/board-delete.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuAddComponent } from './components/menu-add/menu-add.component';
import { MenuEditComponent } from './components/menu-edit/menu-edit.component';
import { MenuDeleteComponent } from './components/menu-delete/menu-delete.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { CustomerDeleteComponent } from './components/customer-delete/customer-delete.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';
import { BookingAddComponent } from './components/booking-add/booking-add.component';
import { BookingEditComponent } from './components/booking-edit/booking-edit.component';
import { BookingDeleteComponent } from './components/booking-delete/booking-delete.component';
import { DatePipe } from '@angular/common';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderAddComponent } from './components/order-add/order-add.component';
import { OrderEditComponent } from './components/order-edit/order-edit.component';
import { OrderDeleteComponent } from './components/order-delete/order-delete.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameAddComponent } from './components/game-add/game-add.component';
import { GameEditComponent } from './components/game-edit/game-edit.component';
import { GameDeleteComponent } from './components/game-delete/game-delete.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TimerListComponent } from './components/timer-list/timer-list.component';
import { TimerComponent } from './components/timer/timer.component';
import { TimerEditComponent } from './components/timer-edit/timer-edit.component';
import { DashboardGameListComponent } from './components/dashboard-game-list/dashboard-game-list.component';
import { DashboardOrderListComponent } from './components/dashboard-order-list/dashboard-order-list.component';
import { DashboardBookingListComponent } from './components/dashboard-booking-list/dashboard-booking-list.component';
import { BillComponent } from './components/bill/bill.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoardListComponent,
    BoardAddComponent,
    BoardEditComponent,
    BoardDeleteComponent,
    MenuListComponent,
    MenuAddComponent,
    MenuEditComponent,
    MenuDeleteComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerDeleteComponent,
    BookingListComponent,
    BookingAddComponent,
    BookingEditComponent,
    BookingDeleteComponent,
    OrderListComponent,
    OrderAddComponent,
    OrderEditComponent,
    OrderDeleteComponent,
    GameListComponent,
    GameAddComponent,
    GameEditComponent,
    GameDeleteComponent,
    DashboardComponent,
    TimerListComponent,
    TimerComponent,
    TimerEditComponent,
    DashboardGameListComponent,
    DashboardOrderListComponent,
    DashboardBookingListComponent,
    BillComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatCardModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
