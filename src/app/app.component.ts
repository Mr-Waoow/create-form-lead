import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { DataSharingService } from './shared/services/data-sharing-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cookieValue!: string;

  //Constructor.
  constructor(
    public translateService: TranslateService,
    public cookieService: CookieService,
    private dataSharingService: DataSharingService
  ) {
    translateService.addLangs(['ar', 'en']);
  }
  ngOnInit(): void {
    this.dataSharingService.setLanguages(this.translateService.getLangs());
    this.cookieValue = this.cookieService.get('language');
    this.dataSharingService.choosenLang$.subscribe((lang) => {
      this.switchLang(lang);
      if (lang !== '') this.cookieValue = lang;
      this.dataSharingService.setCookieValue(this.cookieValue);
    });
    if (this.cookieValue) {
      this.translateService.setDefaultLang(this.cookieValue);
      this.translateService.use(this.cookieValue);
      this.switchLang(this.cookieValue);
    } else {
      this.translateService.setDefaultLang('ar');
      this.translateService.use('ar');
      this.switchLang('ar');
    }
  }

  //Switch language.
  switchLang(lang: string) {
    this.translateService.use(lang);
    this.setDirection(lang);
    this.cookieService.set('language', lang, 7);
  }

  //Set direction.
  setDirection(lang: string): void {
    const htmlTag = document.querySelector('html') as HTMLHtmlElement;
    if (lang === 'ar') {
      htmlTag.dir = 'rtl';
      htmlTag.lang = 'ar';
    } else {
      htmlTag.dir = 'ltr';
      htmlTag.lang = 'en';
    }
  }
}
