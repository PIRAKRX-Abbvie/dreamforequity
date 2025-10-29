import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { RecaptchaService } from '../services/recaptcha.service';
import { buttonStyles } from '../shared/btn/btn.component';
import { iconTypes } from '../shared/icon/icon.constants';
import { ConfigService } from '../shared/config/config.service';
import { ApiService } from '../shared/api/api.service';
import { apiRoutes } from '../shared/constants/route.constants';
import { AnalyticsService } from '../services/analytics.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  animations: [
    trigger("myAnimationTrigger", [
      state('shown', style({
        bottom: '100px',
        opacity: '0.95'
      })
      ), state('hidden', style({
        bottom: '-100%',
        opacity: '0'
      })
      ), transition('hidden => shown', [
        animate('1s ease-in-out')
      ]),
    ])
  ]
})

export class RegisterFormComponent implements OnInit {
  buttonStyles = buttonStyles;
  iconTypes = iconTypes;
  animationState = 'hidden';
  screenWidth = window.innerWidth;
  @Output() onSubmitted = new EventEmitter<Boolean>();

  usProductRelatedMedicalInquiryValue = 'IR-Medcom@Allergan.com';

  form: FormGroup;

  //configSer
  recaptchaSiteKey: string;
  submitting = false;
  submitted = false;
  errored = false;

  constructor(
    private fb: FormBuilder,
    private recaptchaService: RecaptchaService,
    private configService: ConfigService,
    private apiService: ApiService,
    private analyticsService: AnalyticsService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
      
      this.recaptchaService.getRecaptchaSiteKey()
        .pipe(first())
        .subscribe((resp) => {
          this.recaptchaSiteKey = resp['site-key'];
        });

      if (this.screenWidth < 1024) {
        this.animationState = 'shown';
      }

      setTimeout(() => {
        this.animationState = 'shown';
      }, 4000);

  }

  buildForm(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      checkbox: [false, Validators.requiredTrue],
    });

  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }
  onSubmit(recaptchaResponse: string): void {
    if (this.screenWidth < 767) {
      window.scroll(0, 0);
    }
    this.submitted = true;
    let formData = {
      ...this.form.value,
      recaptchaResponse,
      siteOrigin: this.configService.config.siteOrigin,
      siteLanguage: this.configService.config.siteLanguage,
      recaptchaAccount: this.configService.config.recaptchaKey,
      recipient: this.configService.config.recipient,
    }
    this.apiService.post(apiRoutes.register.formPost(), formData)
      .subscribe(
        () => {
          this.analyticsService.pushEvent('formSubmit');
          this.onSubmitted.emit(formData);
        },
        () => {
          this.errored = true;
        }
      );
  }

  hasErrors(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }

  isError(control: AbstractControl, error: string): boolean {
    if (!this.hasErrors(control)) {
      return false;
    }

    if (!control.errors) {
      return false;
    }

    return control.errors[error] === true;
  }
}
