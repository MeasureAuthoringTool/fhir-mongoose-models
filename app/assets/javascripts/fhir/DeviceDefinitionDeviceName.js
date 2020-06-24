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

const DeviceDefinitionDeviceNameSchema = BackboneElementSchemaFunction({
   name : String,
   type : DeviceNameTypeSchema,
   fhirTitle: { type: String, default: 'DeviceDefinitionDeviceName' },
});

class DeviceDefinitionDeviceName extends mongoose.Document {
  constructor(object) {
    super(object, DeviceDefinitionDeviceNameSchema);
    this._type = 'FHIR::DeviceDefinitionDeviceName';
  }
};


module.exports.DeviceDefinitionDeviceNameSchema = DeviceDefinitionDeviceNameSchema;
module.exports.DeviceDefinitionDeviceName = DeviceDefinitionDeviceName;
