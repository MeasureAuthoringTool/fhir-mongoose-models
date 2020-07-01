const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { ValueSetExpansionContainsSchema } = require('./ValueSetExpansionContains');
const { ValueSetExpansionParameterSchema } = require('./ValueSetExpansionParameter');

const ValueSetExpansionSchema = BackboneElementSchemaFunction({
  identifier: PrimitiveUriSchema,
  timestamp: PrimitiveDateTimeSchema,
  total: PrimitiveIntegerSchema,
  offset: PrimitiveIntegerSchema,
  parameter: [ValueSetExpansionParameterSchema],
  contains: [ValueSetExpansionContainsSchema],
  typeName: { type: String, default: 'ValueSetExpansion' },
  _type: { type: String, default: 'FHIR::ValueSetExpansion' },
});

class ValueSetExpansion extends mongoose.Document {
  constructor(object) {
    super(object, ValueSetExpansionSchema);
    this.typeName = 'ValueSetExpansion';
    this._type = 'FHIR::ValueSetExpansion';
  }
}

module.exports.ValueSetExpansionSchema = ValueSetExpansionSchema;
module.exports.ValueSetExpansion = ValueSetExpansion;
