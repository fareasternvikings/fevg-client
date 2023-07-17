import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core'
import {ImageInterface} from '../../../shared/types/image.interface'
import {environment} from '../../../../environments/environment'
import {BehaviorSubject} from 'rxjs'

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoViewerComponent implements OnInit {
  @Input() photos: ImageInterface[]

  currentPhoto$ = new BehaviorSubject<ImageInterface>(null)

  ngOnInit(): void {
    this.currentPhoto$.next(this.photos[0])
  }

  setImageUrl(url) {
    return environment.uploadUrl + url
  }

  changePhoto(photo) {
    this.currentPhoto$.next(photo)
  }
}
