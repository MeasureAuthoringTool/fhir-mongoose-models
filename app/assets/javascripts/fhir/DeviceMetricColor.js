const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const DeviceMetricColorSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'DeviceMetricColor' },
  _type: { type: String, default: 'FHIR::DeviceMetricColor' },
});

class DeviceMetricColor extends mongoose.Document {
  constructor(object) {
    super(object, DeviceMetricColorSchema);
    this.typeName = 'DeviceMetricColor';
    this._type = 'FHIR::DeviceMetricColor';
  }
}

module.exports.DeviceMetricColorSchema = DeviceMetricColorSchema;
module.exports.DeviceMetricColor = DeviceMetricColor;
