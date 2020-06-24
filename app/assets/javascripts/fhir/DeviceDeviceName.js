const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { DeviceNameTypeSchema } = require('./DeviceNameType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceDeviceNameSchema = BackboneElementSchemaFunction({
   name : String,
   type : DeviceNameTypeSchema,
   fhirTitle: { type: String, default: 'DeviceDeviceName' },
});

class DeviceDeviceName extends mongoose.Document {
  constructor(object) {
    super(object, DeviceDeviceNameSchema);
    this._type = 'FHIR::DeviceDeviceName';
  }
};


module.exports.DeviceDeviceNameSchema = DeviceDeviceNameSchema;
module.exports.DeviceDeviceName = DeviceDeviceName;
