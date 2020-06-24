const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceMetricColorSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'DeviceMetricColor' },
});

class DeviceMetricColor extends mongoose.Document {
  constructor(object) {
    super(object, DeviceMetricColorSchema);
    this._type = 'FHIR::DeviceMetricColor';
  }
};


module.exports.DeviceMetricColorSchema = DeviceMetricColorSchema;
module.exports.DeviceMetricColor = DeviceMetricColor;
