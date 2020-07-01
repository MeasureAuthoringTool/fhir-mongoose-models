const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const DeviceRequestStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'DeviceRequestStatus' },
  _type: { type: String, default: 'FHIR::DeviceRequestStatus' },
});

class DeviceRequestStatus extends mongoose.Document {
  constructor(object) {
    super(object, DeviceRequestStatusSchema);
    this.typeName = 'DeviceRequestStatus';
    this._type = 'FHIR::DeviceRequestStatus';
  }
}

module.exports.DeviceRequestStatusSchema = DeviceRequestStatusSchema;
module.exports.DeviceRequestStatus = DeviceRequestStatus;
