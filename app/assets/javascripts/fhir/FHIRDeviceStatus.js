const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const FHIRDeviceStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'FHIRDeviceStatus' },
});

class FHIRDeviceStatus extends mongoose.Document {
  constructor(object) {
    super(object, FHIRDeviceStatusSchema);
    this._type = 'FHIR::FHIRDeviceStatus';
  }
};


module.exports.FHIRDeviceStatusSchema = FHIRDeviceStatusSchema;
module.exports.FHIRDeviceStatus = FHIRDeviceStatus;
