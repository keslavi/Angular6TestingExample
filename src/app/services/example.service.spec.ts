import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ExampleService } from './example.service';
import { mockData } from './example.service.mock';
//import { HttpClient } from 'selenium-webdriver/http';


/*
  NOTE: credit to this for finally sorting it out!
  https://medium.com/spektrakel-blog/angular-testing-snippets-httpclient-d1dc2f035eb8
*/
describe('ExampleService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ExampleService]
    });
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it('should be created', () => {
    const service: ExampleService = TestBed.get(ExampleService);
    expect(service).toBeTruthy();
  });

  it(`should respond with fake data`,
  // 1. declare as async test since the HttpClient works with Observables
  async(
    // 2. inject HttpClient and HttpTestingController into the test
    inject([
      ExampleService,
      HttpTestingController
    ], (
      service: ExampleService,
      backend: HttpTestingController
    ) => {
      // 3. perform the request
      service.get().subscribe(
        (next) => {
          expect(next).toEqual(mockData);
      });

      // 4. HttpTestingController supersedes `MockBackend` from the "old" Http package
      // here two, it's significantly less boilerplate code needed to verify an expected request
      // additional remarked code to demonstrate POST with body
      backend.expectOne((req: HttpRequest<any>) => {
        // const body = new HttpParams({ fromString: req.body });
        return req.url === '/api/'
          && req.method === 'GET';
          // && req.headers.get('Content-Type') === 'application/x-www-form-urlencoded'
          // && body.get('user') === 'foo'
          // && body.get('password') === 'bar';
      }, `Get Results`)
      .flush(mockData);  // fire the subscriber
      //.flush({aaa: 'FAILED!' });  // fail test
    })));


  it(`should issue a request`,
    // 1. declare as async test since the HttpClient works with Observables
    async(
      // 2. inject HttpClient and HttpTestingController into the test
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
        // 3. send a simple request
        http.get('/app/').subscribe();

        // 4. HttpTestingController supersedes `MockBackend` from the "old" Http package
        // here two, it's significantly less boilerplate code needed to verify an expected request
        backend.expectOne({
          url: '/app/',
          method: 'GET'
        });
      })
    )
  );
});
