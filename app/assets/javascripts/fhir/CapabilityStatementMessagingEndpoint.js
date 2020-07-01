const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { PrimitiveUrlSchema } = require('./PrimitiveUrl');

const CapabilityStatementMessagingEndpointSchema = BackboneElementSchemaFunction({
  protocol: CodingSchema,
  address: PrimitiveUrlSchema,
  typeName: { type: String, default: 'CapabilityStatementMessagingEndpoint' },
  _type: { type: String, default: 'FHIR::CapabilityStatementMessagingEndpoint' },
});

class CapabilityStatementMessagingEndpoint extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementMessagingEndpointSchema);
    this.typeName = 'CapabilityStatementMessagingEndpoint';
    this._type = 'FHIR::CapabilityStatementMessagingEndpoint';
  }
}

module.exports.CapabilityStatementMessagingEndpointSchema = CapabilityStatementMessagingEndpointSchema;
module.exports.CapabilityStatementMessagingEndpoint = CapabilityStatementMessagingEndpoint;
