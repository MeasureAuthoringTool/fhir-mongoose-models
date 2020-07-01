const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { ValueSetComposeIncludeSchema } = require('./ValueSetComposeInclude');

const ValueSetComposeSchema = BackboneElementSchemaFunction({
  lockedDate: PrimitiveDateSchema,
  inactive: PrimitiveBooleanSchema,
  include: [ValueSetComposeIncludeSchema],
  exclude: [ValueSetComposeIncludeSchema],
  typeName: { type: String, default: 'ValueSetCompose' },
  _type: { type: String, default: 'FHIR::ValueSetCompose' },
});

class ValueSetCompose extends mongoose.Document {
  constructor(object) {
    super(object, ValueSetComposeSchema);
    this.typeName = 'ValueSetCompose';
    this._type = 'FHIR::ValueSetCompose';
  }
}

module.exports.ValueSetComposeSchema = ValueSetComposeSchema;
module.exports.ValueSetCompose = ValueSetCompose;
