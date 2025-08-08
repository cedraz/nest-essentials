import type { <%= classify(name) %>Repository } from '../<%= dasherize(name) %>.repository.interface';
import { <%= classify(name) %>Entity } from '../../entities/<%= dasherize(name) %>.entity';

export class <%= classify(name) %>InMemoryRepository implements <%= classify(name) %>Repository {
  create(): <%= classify(name) %>Entity {
    return new <%= classify(name) %>Entity();
  }
}
