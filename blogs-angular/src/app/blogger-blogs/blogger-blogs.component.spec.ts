import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggerBlogsComponent } from './blogger-blogs.component';

describe('BloggerBlogsComponent', () => {
  let component: BloggerBlogsComponent;
  let fixture: ComponentFixture<BloggerBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloggerBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloggerBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
