const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceRequestStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'DeviceRequestStatus' },
});

class DeviceRequestStatus extends mongoose.Document {
  constructor(object) {
    super(object, DeviceRequestStatusSchema);
    this._type = 'FHIR::DeviceRequestStatus';
  }
};


module.exports.DeviceRequestStatusSchema = DeviceRequestStatusSchema;
module.exports.DeviceRequestStatus = DeviceRequestStatus;
