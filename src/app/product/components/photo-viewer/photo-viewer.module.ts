import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {PhotoViewerComponent} from './photo-viewer.component'
import {TuiLetModule} from '@taiga-ui/cdk'

@NgModule({
  declarations: [PhotoViewerComponent],
  exports: [PhotoViewerComponent],
  imports: [CommonModule, TuiLetModule],
})
export class PhotoViewerModule {}
