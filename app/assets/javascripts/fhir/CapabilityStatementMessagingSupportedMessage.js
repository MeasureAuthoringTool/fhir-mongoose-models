const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { EventCapabilityModeSchema } = require('./EventCapabilityMode');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CapabilityStatementMessagingSupportedMessageSchema = BackboneElementSchemaFunction({
   mode : EventCapabilityModeSchema,
   definition : String,
   fhirTitle: { type: String, default: 'CapabilityStatementMessagingSupportedMessage' },
});

class CapabilityStatementMessagingSupportedMessage extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementMessagingSupportedMessageSchema);
    this._type = 'FHIR::CapabilityStatementMessagingSupportedMessage';
  }
};


module.exports.CapabilityStatementMessagingSupportedMessageSchema = CapabilityStatementMessagingSupportedMessageSchema;
module.exports.CapabilityStatementMessagingSupportedMessage = CapabilityStatementMessagingSupportedMessage;
