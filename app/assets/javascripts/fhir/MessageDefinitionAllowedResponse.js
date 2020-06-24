const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MessageDefinitionAllowedResponseSchema = BackboneElementSchemaFunction({
   message : String,
   situation : String,
   fhirTitle: { type: String, default: 'MessageDefinitionAllowedResponse' },
});

class MessageDefinitionAllowedResponse extends mongoose.Document {
  constructor(object) {
    super(object, MessageDefinitionAllowedResponseSchema);
    this._type = 'FHIR::MessageDefinitionAllowedResponse';
  }
};


module.exports.MessageDefinitionAllowedResponseSchema = MessageDefinitionAllowedResponseSchema;
module.exports.MessageDefinitionAllowedResponse = MessageDefinitionAllowedResponse;
