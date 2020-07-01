const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ServiceRequestStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ServiceRequestStatus' },
  _type: { type: String, default: 'FHIR::ServiceRequestStatus' },
});

class ServiceRequestStatus extends mongoose.Document {
  constructor(object) {
    super(object, ServiceRequestStatusSchema);
    this.typeName = 'ServiceRequestStatus';
    this._type = 'FHIR::ServiceRequestStatus';
  }
}

module.exports.ServiceRequestStatusSchema = ServiceRequestStatusSchema;
module.exports.ServiceRequestStatus = ServiceRequestStatus;
