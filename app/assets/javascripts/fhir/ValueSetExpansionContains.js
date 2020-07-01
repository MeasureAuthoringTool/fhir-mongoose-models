const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ValueSetComposeIncludeConceptDesignationSchema } = require('./ValueSetComposeIncludeConceptDesignation');

const ValueSetExpansionContainsSchema = BackboneElementSchemaFunction({
  system: PrimitiveUriSchema,
  abstract: PrimitiveBooleanSchema,
  inactive: PrimitiveBooleanSchema,
  version: PrimitiveStringSchema,
  code: PrimitiveCodeSchema,
  display: PrimitiveStringSchema,
  designation: [ValueSetComposeIncludeConceptDesignationSchema],
  contains: [ValueSetExpansionContainsSchema],
  typeName: { type: String, default: 'ValueSetExpansionContains' },
  _type: { type: String, default: 'FHIR::ValueSetExpansionContains' },
});

class ValueSetExpansionContains extends mongoose.Document {
  constructor(object) {
    super(object, ValueSetExpansionContainsSchema);
    this.typeName = 'ValueSetExpansionContains';
    this._type = 'FHIR::ValueSetExpansionContains';
  }
}

module.exports.ValueSetExpansionContainsSchema = ValueSetExpansionContainsSchema;
module.exports.ValueSetExpansionContains = ValueSetExpansionContains;
