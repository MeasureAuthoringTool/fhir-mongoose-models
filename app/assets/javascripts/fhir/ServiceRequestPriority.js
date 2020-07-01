const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ServiceRequestPrioritySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ServiceRequestPriority' },
  _type: { type: String, default: 'FHIR::ServiceRequestPriority' },
});

class ServiceRequestPriority extends mongoose.Document {
  constructor(object) {
    super(object, ServiceRequestPrioritySchema);
    this.typeName = 'ServiceRequestPriority';
    this._type = 'FHIR::ServiceRequestPriority';
  }
}

module.exports.ServiceRequestPrioritySchema = ServiceRequestPrioritySchema;
module.exports.ServiceRequestPriority = ServiceRequestPriority;
