import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogSampleComponent } from './dialog-sample/dialog-sample.component';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-popups-modals',
  templateUrl: './popups-modals.component.html',
  styleUrls: ['./popups-modals.component.scss']
})
export class PopupsModalsComponent {
  
  animal: string;
  name: string;

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogSampleComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  
  alert(message: String) {
    window.alert(message);
  }
  
}
