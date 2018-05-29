import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styles: []
})
export class ProtectedComponent implements OnInit {
  profile: any;
  image: boolean;
  constructor(private auth: AuthService) {

    this.image = false;

  }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      this.image = true;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        this.image = true;
      });
    }
  }

}
