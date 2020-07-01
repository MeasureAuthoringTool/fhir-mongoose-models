const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const CommunicationStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'CommunicationStatus' },
  _type: { type: String, default: 'FHIR::CommunicationStatus' },
});

class CommunicationStatus extends mongoose.Document {
  constructor(object) {
    super(object, CommunicationStatusSchema);
    this.typeName = 'CommunicationStatus';
    this._type = 'FHIR::CommunicationStatus';
  }
}

module.exports.CommunicationStatusSchema = CommunicationStatusSchema;
module.exports.CommunicationStatus = CommunicationStatus;
