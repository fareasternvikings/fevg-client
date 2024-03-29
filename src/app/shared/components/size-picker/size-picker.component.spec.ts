import {ComponentFixture, TestBed} from '@angular/core/testing'

import {SizePickerComponent} from './size-picker.component'

describe('SizePickerComponent', () => {
  let component: SizePickerComponent
  let fixture: ComponentFixture<SizePickerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SizePickerComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SizePickerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
