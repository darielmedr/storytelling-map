import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StaticMapService } from 'src/app/features/static-map/services/static-map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  private unsubscribe$: Subject<void> = new Subject();

  @ViewChild('mapRef') mapRef!: ElementRef<SVGElement>;

  private path!: SVGPathElement;
  private pathLength: number = 0;

  constructor(private mapService: StaticMapService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngAfterViewInit(): void {
    this.path = this.mapRef.nativeElement.querySelector(
      'path#path'
    ) as SVGPathElement;

    this.setPathLength();
    this.setAttrLength();
    this.setAttrOffset();

    this.mapService
      .getOffsetPath()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value: number) => this.setAttrOffset(value));
  }

  private setPathLength(): void {
    this.pathLength = this.path.getTotalLength();
  }

  private setAttrLength(): void {
    const pathLengthStr = this.pathLength.toString();
    this.path.setAttribute('stroke-dasharray', pathLengthStr);
  }

  private setAttrOffset(scrollRate: number = 0): void {
    const value = this.calculatePathOffset(scrollRate);
    this.path.setAttribute('stroke-dashoffset', value.toString());
  }
  private calculatePathOffset(scrollRate: number): number {
    if (scrollRate < 0 || scrollRate > 1) {
      return 0;
    }

    const pathOffset: number = (1 - scrollRate) * this.pathLength;
    return pathOffset;
  }
}
