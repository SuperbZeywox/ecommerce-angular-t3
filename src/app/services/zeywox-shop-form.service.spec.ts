import { TestBed } from '@angular/core/testing';

import { ZeywoxShopFormService } from './zeywox-shop-form.service';

describe('ZeywoxShopFormService', () => {
  let service: ZeywoxShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZeywoxShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
