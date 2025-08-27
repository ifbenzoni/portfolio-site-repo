import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  public readonly title = signal('isaiahbenzoni-portfolio-website');
  public readonly showArrow = signal(false);

  private resizeListener = () => this.checkScrollable();
  private scrollListener = () => this.checkScrollable();

  private checkScrollable() {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const scrollPosTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;

    const isScrollable = totalHeight > windowHeight;
    const isAtBottom = scrollPosTop + windowHeight >= totalHeight - 5;

    this.showArrow.set(isScrollable && !isAtBottom);
  }

  ngAfterViewInit() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      this.checkScrollable();
      window.addEventListener('resize', this.resizeListener);
      window.addEventListener('scroll', this.scrollListener);
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      window.removeEventListener('resize', this.resizeListener);
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

}  
