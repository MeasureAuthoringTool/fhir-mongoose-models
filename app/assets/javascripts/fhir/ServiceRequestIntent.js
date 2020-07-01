const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ServiceRequestIntentSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ServiceRequestIntent' },
  _type: { type: String, default: 'FHIR::ServiceRequestIntent' },
});

class ServiceRequestIntent extends mongoose.Document {
  constructor(object) {
    super(object, ServiceRequestIntentSchema);
    this.typeName = 'ServiceRequestIntent';
    this._type = 'FHIR::ServiceRequestIntent';
  }
}

module.exports.ServiceRequestIntentSchema = ServiceRequestIntentSchema;
module.exports.ServiceRequestIntent = ServiceRequestIntent;
