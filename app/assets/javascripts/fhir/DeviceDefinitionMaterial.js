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

const DeviceDefinitionMaterialSchema = BackboneElementSchemaFunction({
   substance : CodeableConceptSchema,
   alternate : Boolean,
   allergenicIndicator : Boolean,
   fhirTitle: { type: String, default: 'DeviceDefinitionMaterial' },
});

class DeviceDefinitionMaterial extends mongoose.Document {
  constructor(object) {
    super(object, DeviceDefinitionMaterialSchema);
    this._type = 'FHIR::DeviceDefinitionMaterial';
  }
};


module.exports.DeviceDefinitionMaterialSchema = DeviceDefinitionMaterialSchema;
module.exports.DeviceDefinitionMaterial = DeviceDefinitionMaterial;
