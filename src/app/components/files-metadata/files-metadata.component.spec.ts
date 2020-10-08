import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesMetadataComponent } from './files-metadata.component';

describe('FilesMetadataComponent', () => {
  let component: FilesMetadataComponent;
  let fixture: ComponentFixture<FilesMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesMetadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
