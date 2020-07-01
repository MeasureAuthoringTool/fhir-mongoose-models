const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const CommunicationPrioritySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'CommunicationPriority' },
  _type: { type: String, default: 'FHIR::CommunicationPriority' },
});

class CommunicationPriority extends mongoose.Document {
  constructor(object) {
    super(object, CommunicationPrioritySchema);
    this.typeName = 'CommunicationPriority';
    this._type = 'FHIR::CommunicationPriority';
  }
}

module.exports.CommunicationPrioritySchema = CommunicationPrioritySchema;
module.exports.CommunicationPriority = CommunicationPriority;
