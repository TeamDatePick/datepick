import { Controller, Get } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('/api/v1/location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  getLocation() {
    return '신림';
  }

  @Get('/naver')
  requestNaver() {
    return this.locationService.getNaverLocalResult();
  }
}
