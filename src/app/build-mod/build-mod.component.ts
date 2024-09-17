import { Component } from '@angular/core';
import {
  faArrowsToCircle,
  faEye,
  faPenToSquare,
  faPhone,
  faPhoneFlip,
  faCube,
  faEyeSlash,
  faGripVertical,
  faPen,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCircleUser,
  faEnvelope,
  faCopy,
} from '@fortawesome/free-regular-svg-icons';
import { DataSharingService } from '../shared/services/data-sharing-service.service';
@Component({
  selector: 'app-build-mod',
  templateUrl: './build-mod.component.html',
  styleUrl: './build-mod.component.css',
})
export class BuildModComponent {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faGripVertical = faGripVertical;
  faCircleUser = faCircleUser;
  faPenToSquare = faPenToSquare;
  faPhone = faPhone;
  faPhoneFlip = faPhoneFlip;
  faEnvelope = faEnvelope;
  faCube = faCube;
  faCopy = faCopy;
  faPen = faPen;
  faX = faX;
  lang:string = 'ar';
  private _clientName!: string;

  get clientName(): string {
    return this._clientName;
  }
  set clientName(value: string) {
    const clientField = document.getElementById('clientName')! as HTMLInputElement;
    this._clientName = value;
    clientField.value = value;
  }

  //Constructor.
  constructor(private dataSharingService: DataSharingService) {
    this.dataSharingService.getChoosenLang().subscribe((lang) => {
      this.lang = lang;
    });
  }

  showPopup() {
    const popup = document.getElementById('popup')!;
    popup.classList.add('show');
  }

  hidePopup() {
    const popup = document.getElementById('popup')!;
    popup.classList.remove('show');
  }

  showHideEye(evt: Event) {
    const target = evt.currentTarget as HTMLElement;
    const eye = target.querySelector('.eye')!;
    const eyeSlash = target.querySelector('.eye-slash')!;
    eye.classList.toggle('hidden');
    eyeSlash.classList.toggle('hidden');
  }
}
