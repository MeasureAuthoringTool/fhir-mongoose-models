const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceDefinitionSpecializationSchema = BackboneElementSchemaFunction({
   systemType : String,
   version : String,
   fhirTitle: { type: String, default: 'DeviceDefinitionSpecialization' },
});

class DeviceDefinitionSpecialization extends mongoose.Document {
  constructor(object) {
    super(object, DeviceDefinitionSpecializationSchema);
    this._type = 'FHIR::DeviceDefinitionSpecialization';
  }
};


module.exports.DeviceDefinitionSpecializationSchema = DeviceDefinitionSpecializationSchema;
module.exports.DeviceDefinitionSpecialization = DeviceDefinitionSpecialization;
