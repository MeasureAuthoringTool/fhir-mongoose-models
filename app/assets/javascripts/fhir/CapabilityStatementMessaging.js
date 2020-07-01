const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CapabilityStatementMessagingEndpointSchema } = require('./CapabilityStatementMessagingEndpoint');
const { CapabilityStatementMessagingSupportedMessageSchema } = require('./CapabilityStatementMessagingSupportedMessage');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');

const CapabilityStatementMessagingSchema = BackboneElementSchemaFunction({
  endpoint: [CapabilityStatementMessagingEndpointSchema],
  reliableCache: PrimitiveUnsignedIntSchema,
  documentation: PrimitiveMarkdownSchema,
  supportedMessage: [CapabilityStatementMessagingSupportedMessageSchema],
  typeName: { type: String, default: 'CapabilityStatementMessaging' },
  _type: { type: String, default: 'FHIR::CapabilityStatementMessaging' },
});

class CapabilityStatementMessaging extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementMessagingSchema);
    this.typeName = 'CapabilityStatementMessaging';
    this._type = 'FHIR::CapabilityStatementMessaging';
  }
}

module.exports.CapabilityStatementMessagingSchema = CapabilityStatementMessagingSchema;
module.exports.CapabilityStatementMessaging = CapabilityStatementMessaging;
