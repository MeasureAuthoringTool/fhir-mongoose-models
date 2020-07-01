const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const SearchParameterComponentSchema = BackboneElementSchemaFunction({
  definition: PrimitiveCanonicalSchema,
  expression: PrimitiveStringSchema,
  typeName: { type: String, default: 'SearchParameterComponent' },
  _type: { type: String, default: 'FHIR::SearchParameterComponent' },
});

class SearchParameterComponent extends mongoose.Document {
  constructor(object) {
    super(object, SearchParameterComponentSchema);
    this.typeName = 'SearchParameterComponent';
    this._type = 'FHIR::SearchParameterComponent';
  }
}

module.exports.SearchParameterComponentSchema = SearchParameterComponentSchema;
module.exports.SearchParameterComponent = SearchParameterComponent;
