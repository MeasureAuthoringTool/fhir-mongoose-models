const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MessageheaderResponseRequestSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'MessageheaderResponseRequest' },
});

class MessageheaderResponseRequest extends mongoose.Document {
  constructor(object) {
    super(object, MessageheaderResponseRequestSchema);
    this._type = 'FHIR::MessageheaderResponseRequest';
  }
};


module.exports.MessageheaderResponseRequestSchema = MessageheaderResponseRequestSchema;
module.exports.MessageheaderResponseRequest = MessageheaderResponseRequest;
