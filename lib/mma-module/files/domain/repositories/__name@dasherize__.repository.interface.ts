import { <%= classify(name) %>Entity } from '../entities/<%= dasherize(name) %>.entity';

export interface <%= classify(name) %>Repository {
  create(): <%= classify(name) %>Entity;
}
