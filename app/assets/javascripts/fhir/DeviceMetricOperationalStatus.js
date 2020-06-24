const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceMetricOperationalStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'DeviceMetricOperationalStatus' },
});

class DeviceMetricOperationalStatus extends mongoose.Document {
  constructor(object) {
    super(object, DeviceMetricOperationalStatusSchema);
    this._type = 'FHIR::DeviceMetricOperationalStatus';
  }
};


module.exports.DeviceMetricOperationalStatusSchema = DeviceMetricOperationalStatusSchema;
module.exports.DeviceMetricOperationalStatus = DeviceMetricOperationalStatus;
