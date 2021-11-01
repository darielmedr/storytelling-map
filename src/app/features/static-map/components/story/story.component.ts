import { debounceTime, takeUntil } from 'rxjs/operators';
import { StaticMapService } from 'src/app/features/static-map/services/static-map.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit, AfterViewInit, OnDestroy {

  private unsubscribe$: Subject<void> = new Subject();

  @ViewChild('story', { static: true }) storyRef!: ElementRef;

  constructor(private mapService: StaticMapService) {}

  ngOnInit(): void {}


  ngAfterViewInit(): void {
    this.listenScrollYOffset();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private listenScrollYOffset(): void {
    const target = this.storyRef.nativeElement as HTMLElement;

    fromEvent(window, 'scroll')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        const scrolledRate = this.getScrolledRateOf(target);
        this.mapService.setOffset(scrolledRate);
      });
  }

  private getScrolledRateOf(target: HTMLElement): number {
    const scrollTop = window.scrollY;
    const winHeight = window.innerHeight;
    const docHeight = target.offsetHeight;
    const scrolledRate = scrollTop / (docHeight - winHeight);

    if (scrolledRate > 1) {
      return 1;
    }

    return scrolledRate;
  }
}
