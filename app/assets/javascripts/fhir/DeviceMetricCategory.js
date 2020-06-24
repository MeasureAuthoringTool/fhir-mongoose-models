const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceMetricCategorySchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'DeviceMetricCategory' },
});

class DeviceMetricCategory extends mongoose.Document {
  constructor(object) {
    super(object, DeviceMetricCategorySchema);
    this._type = 'FHIR::DeviceMetricCategory';
  }
};


module.exports.DeviceMetricCategorySchema = DeviceMetricCategorySchema;
module.exports.DeviceMetricCategory = DeviceMetricCategory;
