import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../interfaces/User';
import { CloudService } from '../login/services/cloud/cloud.service';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'node-project-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  user!: User | null

  constructor(private authService: LoginService, private cloudService: CloudService) {
    this.user = this.authService.currentUserValue;
  }

  ngOnInit(): void {
  }


  startVm(): void {
    this.cloudService.loadAzureVM();
    const dnsname = this.cloudService.getDNSname();

    window.open(dnsname, '_blank');
  }
}
