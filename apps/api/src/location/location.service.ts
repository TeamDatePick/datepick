import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom, map } from 'rxjs';

@Injectable()
export class LocationService {
  constructor(private readonly httpService: HttpService) {}

  async getNaverLocalResult() {
    const naverClientID = process.env.NAVER_OPEN_API_CLIENT_ID;
    const naverClientSecret = process.env.NAVER_OPEN_API_CLIENT_SECRET;
    const queryString = encodeURIComponent('신림');
    const { data } = await firstValueFrom(
      this.httpService
        .get(`https://openapi.naver.com/v1/search/local?query=${queryString}`, {
          headers: {
            'X-Naver-Client-Id': naverClientID,
            'X-Naver-Client-Secret': naverClientSecret,
          },
        })
        .pipe(
          catchError(() => {
            throw new Error('api response error!');
          }),
        ),
    );

    return data;
  }
}
