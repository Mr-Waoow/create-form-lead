import { Component } from '@angular/core';
import { DataSharingService } from '../services/data-sharing-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  translateGetLangs!: any[];
  language = 'ar';

  //Constructor.
  constructor(private dataSharingService: DataSharingService) {}

  //Lifecycle hook.
  ngOnInit(): void {
    this.dataSharingService.getLanguages().subscribe((langs) => {
      this.translateGetLangs = langs;
    });
  }
  //Send Language to parent.
  sendLanguageToParent(lang: string) {
    this.language = lang;
    this.dataSharingService.setChoosenLang(lang);
  }
}
