import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from 'src/app/firebase';
import { DialogService } from 'src/app/services/dialog.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-board-delete',
  templateUrl: './board-delete.component.html',
  styles: [],
})
export class BoardDeleteComponent {
  submitting: boolean = false;

  constructor(
    private dialogService: DialogService,
    private messageService: MessageService,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  async deleteBoard() {
    this.submitting = true;
    const boardId = this.data;
    const boardDocRef = doc(db, 'boards', boardId);
    await deleteDoc(boardDocRef);
    this.dialogService.close();
    this.messageService.open('Board has been deleted successfully');
    this.submitting = false;
  }

  close() {
    this.dialogService.close();
  }
}
