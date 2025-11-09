import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user: any;
  @Input() isActive = false;  // ✅ <-- Add this line
  @Output() viewDetails = new EventEmitter<void>();
}
