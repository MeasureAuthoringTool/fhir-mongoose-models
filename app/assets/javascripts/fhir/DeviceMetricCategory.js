const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const DeviceMetricCategorySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'DeviceMetricCategory' },
  _type: { type: String, default: 'FHIR::DeviceMetricCategory' },
});

class DeviceMetricCategory extends mongoose.Document {
  constructor(object) {
    super(object, DeviceMetricCategorySchema);
    this.typeName = 'DeviceMetricCategory';
    this._type = 'FHIR::DeviceMetricCategory';
  }
}

module.exports.DeviceMetricCategorySchema = DeviceMetricCategorySchema;
module.exports.DeviceMetricCategory = DeviceMetricCategory;
