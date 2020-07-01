const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const CommunicationRequestStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'CommunicationRequestStatus' },
  _type: { type: String, default: 'FHIR::CommunicationRequestStatus' },
});

class CommunicationRequestStatus extends mongoose.Document {
  constructor(object) {
    super(object, CommunicationRequestStatusSchema);
    this.typeName = 'CommunicationRequestStatus';
    this._type = 'FHIR::CommunicationRequestStatus';
  }
}

module.exports.CommunicationRequestStatusSchema = CommunicationRequestStatusSchema;
module.exports.CommunicationRequestStatus = CommunicationRequestStatus;
