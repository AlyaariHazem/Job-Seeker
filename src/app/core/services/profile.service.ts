import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment.development';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(private http: HttpClient) {}

  // /api/accounts/profile/update/
  updateBasic(body: {
    first_name: string; last_name: string; email: string; phone?: string;
    date_of_birth?: string; bio?: string; location?: string; profile_picture?: string;
  }) {
    return this.http.put(environment.getUrl('profile/update', 'accounts'), body);
  }

  // multipart for when you send a file
  updateBasicFormData(fd: FormData) {
    return this.http.put(environment.getUrl('profile/update', 'accounts'), fd);
  }

  // /api/accounts/profile/job-seeker/
  updateJobSeeker(body: any) {
    return this.http.put(environment.getUrl('profile/job-seeker', 'accounts'), body);
  }
  updateJobSeekerFormData(fd: FormData) {
    return this.http.put(environment.getUrl('profile/job-seeker', 'accounts'), fd);
  }

  getProfile() {
    return this.http.get(environment.getUrl('profile', 'accounts'));
  }
}
