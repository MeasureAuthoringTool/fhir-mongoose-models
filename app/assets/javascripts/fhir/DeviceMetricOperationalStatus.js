const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const DeviceMetricOperationalStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'DeviceMetricOperationalStatus' },
  _type: { type: String, default: 'FHIR::DeviceMetricOperationalStatus' },
});

class DeviceMetricOperationalStatus extends mongoose.Document {
  constructor(object) {
    super(object, DeviceMetricOperationalStatusSchema);
    this.typeName = 'DeviceMetricOperationalStatus';
    this._type = 'FHIR::DeviceMetricOperationalStatus';
  }
}

module.exports.DeviceMetricOperationalStatusSchema = DeviceMetricOperationalStatusSchema;
module.exports.DeviceMetricOperationalStatus = DeviceMetricOperationalStatus;
