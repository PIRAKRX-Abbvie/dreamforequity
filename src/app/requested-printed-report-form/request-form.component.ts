import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { RecaptchaService } from '../services/recaptcha.service';
import { buttonStyles } from '../shared/btn/btn.component';
import { iconTypes } from '../shared/icon/icon.constants';
import { ConfigService } from '../shared/config/config.service';
import { ApiService } from '../shared/api/api.service';
import { apiRoutes } from '../shared/constants/route.constants';
import { AnalyticsService } from '../services/analytics.service';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-request-form',
    templateUrl: './request-form.component.html',
    styleUrls: ['./request-form.component.scss'],
})

export class RequestFormComponent implements OnInit {
    buttonStyles = buttonStyles;
    iconTypes = iconTypes;
    screenWidth = window.innerWidth;
    faChevronDown = faChevronDown;
    isHealthCareProvider = false;
    
    @Output() onSubmitted = new EventEmitter<Boolean>();

    usProductRelatedMedicalInquiryValue = 'IR-Medcom@Allergan.com';

    form: FormGroup;

    //configSer
    recaptchaSiteKey: string;
    submitting = false;
    submitted = false;
    errored = false;

    usState: any = [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        {
            "name": "Alaska",
            "abbreviation": "AK"
        },
        {
            "name": "American Samoa",
            "abbreviation": "AS"
        },
        {
            "name": "Arizona",
            "abbreviation": "AZ"
        },
        {
            "name": "Arkansas",
            "abbreviation": "AR"
        },
        {
            "name": "California",
            "abbreviation": "CA"
        },
        {
            "name": "Colorado",
            "abbreviation": "CO"
        },
        {
            "name": "Connecticut",
            "abbreviation": "CT"
        },
        {
            "name": "Delaware",
            "abbreviation": "DE"
        },
        {
            "name": "District Of Columbia",
            "abbreviation": "DC"
        },
        {
            "name": "Federated States Of Micronesia",
            "abbreviation": "FM"
        },
        {
            "name": "Florida",
            "abbreviation": "FL"
        },
        {
            "name": "Georgia",
            "abbreviation": "GA"
        },
        {
            "name": "Guam",
            "abbreviation": "GU"
        },
        {
            "name": "Hawaii",
            "abbreviation": "HI"
        },
        {
            "name": "Idaho",
            "abbreviation": "ID"
        },
        {
            "name": "Illinois",
            "abbreviation": "IL"
        },
        {
            "name": "Indiana",
            "abbreviation": "IN"
        },
        {
            "name": "Iowa",
            "abbreviation": "IA"
        },
        {
            "name": "Kansas",
            "abbreviation": "KS"
        },
        {
            "name": "Kentucky",
            "abbreviation": "KY"
        },
        {
            "name": "Louisiana",
            "abbreviation": "LA"
        },
        {
            "name": "Maine",
            "abbreviation": "ME"
        },
        {
            "name": "Marshall Islands",
            "abbreviation": "MH"
        },
        {
            "name": "Maryland",
            "abbreviation": "MD"
        },
        {
            "name": "Massachusetts",
            "abbreviation": "MA"
        },
        {
            "name": "Michigan",
            "abbreviation": "MI"
        },
        {
            "name": "Minnesota",
            "abbreviation": "MN"
        },
        {
            "name": "Mississippi",
            "abbreviation": "MS"
        },
        {
            "name": "Missouri",
            "abbreviation": "MO"
        },
        {
            "name": "Montana",
            "abbreviation": "MT"
        },
        {
            "name": "Nebraska",
            "abbreviation": "NE"
        },
        {
            "name": "Nevada",
            "abbreviation": "NV"
        },
        {
            "name": "New Hampshire",
            "abbreviation": "NH"
        },
        {
            "name": "New Jersey",
            "abbreviation": "NJ"
        },
        {
            "name": "New Mexico",
            "abbreviation": "NM"
        },
        {
            "name": "New York",
            "abbreviation": "NY"
        },
        {
            "name": "North Carolina",
            "abbreviation": "NC"
        },
        {
            "name": "North Dakota",
            "abbreviation": "ND"
        },
        {
            "name": "Northern Mariana Islands",
            "abbreviation": "MP"
        },
        {
            "name": "Ohio",
            "abbreviation": "OH"
        },
        {
            "name": "Oklahoma",
            "abbreviation": "OK"
        },
        {
            "name": "Oregon",
            "abbreviation": "OR"
        },
        {
            "name": "Palau",
            "abbreviation": "PW"
        },
        {
            "name": "Pennsylvania",
            "abbreviation": "PA"
        },
        {
            "name": "Puerto Rico",
            "abbreviation": "PR"
        },
        {
            "name": "Rhode Island",
            "abbreviation": "RI"
        },
        {
            "name": "South Carolina",
            "abbreviation": "SC"
        },
        {
            "name": "South Dakota",
            "abbreviation": "SD"
        },
        {
            "name": "Tennessee",
            "abbreviation": "TN"
        },
        {
            "name": "Texas",
            "abbreviation": "TX"
        },
        {
            "name": "Utah",
            "abbreviation": "UT"
        },
        {
            "name": "Vermont",
            "abbreviation": "VT"
        },
        {
            "name": "Virgin Islands",
            "abbreviation": "VI"
        },
        {
            "name": "Virginia",
            "abbreviation": "VA"
        },
        {
            "name": "Washington",
            "abbreviation": "WA"
        },
        {
            "name": "West Virginia",
            "abbreviation": "WV"
        },
        {
            "name": "Wisconsin",
            "abbreviation": "WI"
        },
        {
            "name": "Wyoming",
            "abbreviation": "WY"
        }
    ]

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

    }

    buildForm(): void {
        this.form = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            address1: ['', Validators.required],
            address2: [''],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zip: ['', Validators.required],
            checkbox: [false, Validators.requiredTrue],
            checkbox2: [false]
        });

    }
    isHealthCareCheckboxChange(event: any): void {
        this.isHealthCareProvider = event.target.checked
    }
  
    onSubmit(recaptchaResponse: string): void {
        this.submitted = true;
        let formData = {
            ...this.form.value,
            recaptchaResponse,
            siteOrigin: this.configService.config.siteOrigin,
            siteLanguage: this.configService.config.siteLanguage,
            recaptchaAccount: this.configService.config.recaptchaKey,
            recipient: this.configService.config.recipient,
            isHealthCareProvider: this.isHealthCareProvider,
            formVersion: "HOMEV2"
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
