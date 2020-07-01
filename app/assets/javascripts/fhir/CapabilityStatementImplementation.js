const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUrlSchema } = require('./PrimitiveUrl');
const { ReferenceSchema } = require('./Reference');

const CapabilityStatementImplementationSchema = BackboneElementSchemaFunction({
  description: PrimitiveStringSchema,
  url: PrimitiveUrlSchema,
  custodian: ReferenceSchema,
  typeName: { type: String, default: 'CapabilityStatementImplementation' },
  _type: { type: String, default: 'FHIR::CapabilityStatementImplementation' },
});

class CapabilityStatementImplementation extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementImplementationSchema);
    this.typeName = 'CapabilityStatementImplementation';
    this._type = 'FHIR::CapabilityStatementImplementation';
  }
}

module.exports.CapabilityStatementImplementationSchema = CapabilityStatementImplementationSchema;
module.exports.CapabilityStatementImplementation = CapabilityStatementImplementation;
