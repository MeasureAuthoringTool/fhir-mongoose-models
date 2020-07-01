const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { EventCapabilityModeSchema } = require('./EventCapabilityMode');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');

const CapabilityStatementMessagingSupportedMessageSchema = BackboneElementSchemaFunction({
  mode: EventCapabilityModeSchema,
  definition: PrimitiveCanonicalSchema,
  typeName: { type: String, default: 'CapabilityStatementMessagingSupportedMessage' },
  _type: { type: String, default: 'FHIR::CapabilityStatementMessagingSupportedMessage' },
});

class CapabilityStatementMessagingSupportedMessage extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementMessagingSupportedMessageSchema);
    this.typeName = 'CapabilityStatementMessagingSupportedMessage';
    this._type = 'FHIR::CapabilityStatementMessagingSupportedMessage';
  }
}

module.exports.CapabilityStatementMessagingSupportedMessageSchema = CapabilityStatementMessagingSupportedMessageSchema;
module.exports.CapabilityStatementMessagingSupportedMessage = CapabilityStatementMessagingSupportedMessage;
