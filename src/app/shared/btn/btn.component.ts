// @ts-nocheck
import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
  
} from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { iconTypes } from '../icon/icon.constants';

export enum buttonStyles {
  primary,
  primarySolid,
  primarySmall,
  primarySmallSolid,
  secondary,
  secondarySolid,
  secondarySmallSolid,
 
}

export enum iconType {
  arrowRight
}

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})

export class BtnComponent implements OnChanges {
  buttonStyles = buttonStyles;

  @Input() style: buttonStyles;
  @Input() type = 'button';
  @Input() href: string | null = null;
  @Input() disabled = false;
  @Input() icon: IconDefinition | null = null;
  @Output() onClick = new EventEmitter<Event>();

  classes: string;

  constructor() {}

  ngOnChanges(): void {
    this.classes = `btn btn-${buttonStyles[this.style]}`;
  }

  hasRightIcon() {
    if (!this.icon) {
      return false;
    }

    const rightIcons = [iconTypes.arrowRight];

    return rightIcons.includes(this.icon);
  }

  onClickClick($event: Event) {
    if (this.disabled) {
      return;
    }

    if (this.href) {
      window.location.href = this.href;
      return;
    }

    this.onClick.emit($event);
  }
}
