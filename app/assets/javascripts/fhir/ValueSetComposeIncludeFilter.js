const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { FilterOperatorSchema } = require('./FilterOperator');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ValueSetComposeIncludeFilterSchema = BackboneElementSchemaFunction({
  property: PrimitiveCodeSchema,
  op: FilterOperatorSchema,
  value: PrimitiveStringSchema,
  typeName: { type: String, default: 'ValueSetComposeIncludeFilter' },
  _type: { type: String, default: 'FHIR::ValueSetComposeIncludeFilter' },
});

class ValueSetComposeIncludeFilter extends mongoose.Document {
  constructor(object) {
    super(object, ValueSetComposeIncludeFilterSchema);
    this.typeName = 'ValueSetComposeIncludeFilter';
    this._type = 'FHIR::ValueSetComposeIncludeFilter';
  }
}

module.exports.ValueSetComposeIncludeFilterSchema = ValueSetComposeIncludeFilterSchema;
module.exports.ValueSetComposeIncludeFilter = ValueSetComposeIncludeFilter;
