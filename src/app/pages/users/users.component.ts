import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, MatDialogModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchTerm = '';
  sortBy = 'name';
  loading = true;
  error = '';

  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.filteredUsers = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load users';
        this.loading = false;
      }
    });
  }

  openDetails(user: any) {
    this.dialog.open(UserDetailsComponent, {
      width: '400px',
      data: user,
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
      panelClass: 'custom-dialog-container'
    });
  }

  searchUsers() {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(u =>
      u.name.toLowerCase().includes(term)
    );
  }

  sortUsers() {
    this.filteredUsers.sort((a, b) =>
      a[this.sortBy].localeCompare(b[this.sortBy])
    );
  }
}
