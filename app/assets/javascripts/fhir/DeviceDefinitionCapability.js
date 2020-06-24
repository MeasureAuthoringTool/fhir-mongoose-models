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

const DeviceDefinitionCapabilitySchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   description : [CodeableConceptSchema],
   fhirTitle: { type: String, default: 'DeviceDefinitionCapability' },
});

class DeviceDefinitionCapability extends mongoose.Document {
  constructor(object) {
    super(object, DeviceDefinitionCapabilitySchema);
    this._type = 'FHIR::DeviceDefinitionCapability';
  }
};


module.exports.DeviceDefinitionCapabilitySchema = DeviceDefinitionCapabilitySchema;
module.exports.DeviceDefinitionCapability = DeviceDefinitionCapability;
