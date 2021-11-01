import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class StaticMapService {

  private offsetPath$: Subject<number> = new Subject();

  constructor() { }

  public setOffset(value: number): void {
    this.offsetPath$.next(value);
  }

  public getOffsetPath(): Observable<number> {
    return this.offsetPath$.asObservable();
  }
}
