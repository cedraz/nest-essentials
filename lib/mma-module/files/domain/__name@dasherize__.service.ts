import { Injectable } from '@nestjs/common';
import type { <%= classify(name) %>Repository } from './repositories/<%= dasherize(name) %>.repository.interface';

@Injectable()
export class <%= classify(name) %>Service {
  constructor(private readonly <%= camelize(name) %>Repository: <%= classify(name) %>Repository) {}
}
