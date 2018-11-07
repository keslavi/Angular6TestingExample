import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';

//this could be broken into a separate mock area if multiple places use it without the service
export const mockData = {
    message: 'hello MockSERVICE'
}

//intentionally not injected to root; only need for test
@Injectable()
export class MockExampleService {
    construction (){}

    public get(): Observable<any> { 
        return of(mockData);
    }
}