import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTelegramUiComponent } from './ngx-telegram-ui.component';

describe('NgxTelegramUiComponent', () => {
  let component: NgxTelegramUiComponent;
  let fixture: ComponentFixture<NgxTelegramUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTelegramUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxTelegramUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
