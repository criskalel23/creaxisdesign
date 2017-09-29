import { Pipe, PipeTransform } from '@angular/core';

import { Clients } from './clients-list';

@Pipe({ name: 'clientTestimonial' })
export class TestimonialPipe implements PipeTransform {
  transform(items: Clients[], filterQuery: any) : any[] {
    return items.filter(item => item.hasTestimonial);
  }
}


