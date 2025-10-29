// @ts-nocheck
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';
import {
  faLongArrowAltRight,
  faAngleDown,
  faAngleUp,
  faTimes,
  faChevronRight,
  faSpinner,
  IconDefinition,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { iconTypes } from './icon.constants';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit, OnChanges {
  @Input() type: IconDefinition | null;
  @Input() spin = false;
  @Input() hasBadge = false;
  @Output() click = new EventEmitter();

  views = {
    default: 'default',
    clickable: 'clickable'
  };
  
  view: string;

  icon: IconDefinition | undefined;

  ngOnInit() {
    this.setView();
    this.setIcon()
  }

  ngOnChanges() {
    this.setView();
  }

  setView() {
    if (this.click.observers.length > 0) {
      this.view = this.views.clickable;
      return;
    }

    this.view = this.views.default;
  }

  setIcon() {
    if(!this.type) {
      this.icon = undefined;
    }

    switch(this.type){
      case iconTypes.arrowRight: 
        this.icon = faLongArrowAltRight;
        break;      
      case iconTypes.caretDown: 
        this.icon = faAngleDown;
        break;
      case iconTypes.caretUp: 
        this.icon = faAngleUp;
        break;
      case iconTypes.close: 
        this.icon = faTimes;
        break;
      case iconTypes.chevronRight: 
        this.icon = faChevronRight;
        break;
      case iconTypes.chevronLeft:
        this.icon = faChevronLeft;
        break;
      case iconTypes.loading: 
        this.icon = faSpinner;
        break;
      default:
        this.icon = undefined;  
    }
  }

  onEnter() {
    this.click.emit();
  }
}
