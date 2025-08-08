import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url,
  template,
  move,
  mergeWith,
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';


export function mmaModule(_options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {    
    const sourceTemplates = url('./files');
    
    const sourceParametrizedTemplates = apply(sourceTemplates, [      
      template({
        ..._options, 
        ...strings, 
      }),    
      move(`src/${strings.dasherize(_options.name)}`),
    ]);
  
    return mergeWith(sourceParametrizedTemplates);
  };
}