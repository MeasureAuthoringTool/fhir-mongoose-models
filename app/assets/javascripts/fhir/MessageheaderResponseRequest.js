const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const MessageheaderResponseRequestSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'MessageheaderResponseRequest' },
  _type: { type: String, default: 'FHIR::MessageheaderResponseRequest' },
});

class MessageheaderResponseRequest extends mongoose.Document {
  constructor(object) {
    super(object, MessageheaderResponseRequestSchema);
    this.typeName = 'MessageheaderResponseRequest';
    this._type = 'FHIR::MessageheaderResponseRequest';
  }
}

module.exports.MessageheaderResponseRequestSchema = MessageheaderResponseRequestSchema;
module.exports.MessageheaderResponseRequest = MessageheaderResponseRequest;
