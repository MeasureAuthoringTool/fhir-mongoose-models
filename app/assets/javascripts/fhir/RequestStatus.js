const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const RequestStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'RequestStatus' },
  _type: { type: String, default: 'FHIR::RequestStatus' },
});

class RequestStatus extends mongoose.Document {
  constructor(object) {
    super(object, RequestStatusSchema);
    this.typeName = 'RequestStatus';
    this._type = 'FHIR::RequestStatus';
  }
}

module.exports.RequestStatusSchema = RequestStatusSchema;
module.exports.RequestStatus = RequestStatus;
