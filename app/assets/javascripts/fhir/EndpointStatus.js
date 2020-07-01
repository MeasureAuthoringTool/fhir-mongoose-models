const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const EndpointStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'EndpointStatus' },
  _type: { type: String, default: 'FHIR::EndpointStatus' },
});

class EndpointStatus extends mongoose.Document {
  constructor(object) {
    super(object, EndpointStatusSchema);
    this.typeName = 'EndpointStatus';
    this._type = 'FHIR::EndpointStatus';
  }
}

module.exports.EndpointStatusSchema = EndpointStatusSchema;
module.exports.EndpointStatus = EndpointStatus;
