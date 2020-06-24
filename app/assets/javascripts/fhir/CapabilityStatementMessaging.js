const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CapabilityStatementMessagingEndpointSchema } = require('./CapabilityStatementMessagingEndpoint');
const { CapabilityStatementMessagingSupportedMessageSchema } = require('./CapabilityStatementMessagingSupportedMessage');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CapabilityStatementMessagingSchema = BackboneElementSchemaFunction({
   endpoint : [CapabilityStatementMessagingEndpointSchema],
   reliableCache : Number,
   documentation : String,
   supportedMessage : [CapabilityStatementMessagingSupportedMessageSchema],
   fhirTitle: { type: String, default: 'CapabilityStatementMessaging' },
});

class CapabilityStatementMessaging extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementMessagingSchema);
    this._type = 'FHIR::CapabilityStatementMessaging';
  }
};


module.exports.CapabilityStatementMessagingSchema = CapabilityStatementMessagingSchema;
module.exports.CapabilityStatementMessaging = CapabilityStatementMessaging;
