import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/client/classik/src/environments/environment';
import { Observable, of } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  private access!: string;

  private loaded = false;

  constructor(private http:HttpClient, private authService: LoginService) { }

  connectToAzure(): void {
    this.http.post('https://login.microsoftonline.com/b7b023b8-7c32-4c02-92a6-c8cdaa1d189c/oauth2/authorize?client_id=c44b4083-3bb0-49c1-b47d-974e53cbdf3c&response_type=code&redirect_uri=http%3A%2F%2Flocalhost&response_mode=query&scope=2ff814a6-3304-4ab8-85cb-cd0e6f879c1d%2F.default&state=12345&grant_type=client_credentials', {}).subscribe((res: any) => {
      this.access = res.access_token;
    });
  }

  loadAzureVM(): Observable<Object> {
    if(this.authService.currentUserValue && this.authService.currentUserValue.role === 'admin') {
      
      if(!this.access) {
        this.connectToAzure();
      }
      return this.http.post('https://management.azure.com/subscriptions/6f5c044b-fb7c-4159-a16d-2308984a36a7/resourceGroups/cloudProject/providers/Microsoft.Compute/virtualMachines/cloud-gaming-devinci/start?api-version=2021-07-01', {}, {headers: {'Authorization': this.access}});
    }
    return of();
  }

  getDNSname(): string  {
    if(this.authService.currentUserValue && this.authService.currentUserValue.role === 'admin') {
      
      if(!this.loaded) {
        this.loadAzureVM();
      }
      return 'gamingdevinci.eastus.cloudapp.azure.com';
    }
    return '';
  }
}
