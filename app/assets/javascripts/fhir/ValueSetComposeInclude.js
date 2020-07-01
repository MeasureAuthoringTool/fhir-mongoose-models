const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ValueSetComposeIncludeConceptSchema } = require('./ValueSetComposeIncludeConcept');
const { ValueSetComposeIncludeFilterSchema } = require('./ValueSetComposeIncludeFilter');

const ValueSetComposeIncludeSchema = BackboneElementSchemaFunction({
  system: PrimitiveUriSchema,
  version: PrimitiveStringSchema,
  concept: [ValueSetComposeIncludeConceptSchema],
  filter: [ValueSetComposeIncludeFilterSchema],
  valueSet: [PrimitiveCanonicalSchema],
  typeName: { type: String, default: 'ValueSetComposeInclude' },
  _type: { type: String, default: 'FHIR::ValueSetComposeInclude' },
});

class ValueSetComposeInclude extends mongoose.Document {
  constructor(object) {
    super(object, ValueSetComposeIncludeSchema);
    this.typeName = 'ValueSetComposeInclude';
    this._type = 'FHIR::ValueSetComposeInclude';
  }
}

module.exports.ValueSetComposeIncludeSchema = ValueSetComposeIncludeSchema;
module.exports.ValueSetComposeInclude = ValueSetComposeInclude;
