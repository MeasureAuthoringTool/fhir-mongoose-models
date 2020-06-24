const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceSpecializationSchema = BackboneElementSchemaFunction({
   systemType : CodeableConceptSchema,
   version : String,
   fhirTitle: { type: String, default: 'DeviceSpecialization' },
});

class DeviceSpecialization extends mongoose.Document {
  constructor(object) {
    super(object, DeviceSpecializationSchema);
    this._type = 'FHIR::DeviceSpecialization';
  }
};


module.exports.DeviceSpecializationSchema = DeviceSpecializationSchema;
module.exports.DeviceSpecialization = DeviceSpecialization;
