import { Controller, Get } from '@nestjs/common';

@Controller('/api/v1/location')
export class LocationController {
  constructor() {}

  @Get()
  getLocation() {
    return '신림';
  }
}
