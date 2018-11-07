import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockExampleService, mockData} from './services/example.service.mock';
import { ExampleService } from './services/example.service';

//import { HttpClientTestingModule} from '@angular/common/http/testing';


describe('AppComponent', () => {
  beforeEach(async(() => {
    /*
      think of TestBed as the app.module; it needs to be built for every dependency.
      we can probably abstract some of this into a common configuration
    */
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        //HttpClientTestingModule //needed because it interacts directly with service.
      ],
      declarations: [
        AppComponent
      ],
      providers: [{provide: ExampleService, useClass: MockExampleService }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testingsample'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('testingsample');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to testingsample!');
  });

  //note: async because the service is using observables
  it (`should return data from mock service`,
    async(inject([ExampleService], (svc: ExampleService) => {
      svc.get().subscribe( (next) => {
        expect(next).toEqual(mockData);
        //sample fail test
        //expect(next).toEqual({messgae: 'nope'});
      });
    })));
});
