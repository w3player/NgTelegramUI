import { TestBed } from '@angular/core/testing';

import { NgxTelegramUiService } from './ngx-telegram-ui.service';

describe('NgxTelegramUiService', () => {
  let service: NgxTelegramUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTelegramUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
