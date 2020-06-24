const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CommunicationPrioritySchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'CommunicationPriority' },
});

class CommunicationPriority extends mongoose.Document {
  constructor(object) {
    super(object, CommunicationPrioritySchema);
    this._type = 'FHIR::CommunicationPriority';
  }
};


module.exports.CommunicationPrioritySchema = CommunicationPrioritySchema;
module.exports.CommunicationPriority = CommunicationPriority;
