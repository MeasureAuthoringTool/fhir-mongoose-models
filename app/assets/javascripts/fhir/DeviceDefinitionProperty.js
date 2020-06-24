const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { QuantitySchema } = require('./Quantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DeviceDefinitionPropertySchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   valueQuantity : [QuantitySchema],
   valueCode : [CodeableConceptSchema],
   fhirTitle: { type: String, default: 'DeviceDefinitionProperty' },
});

class DeviceDefinitionProperty extends mongoose.Document {
  constructor(object) {
    super(object, DeviceDefinitionPropertySchema);
    this._type = 'FHIR::DeviceDefinitionProperty';
  }
};


module.exports.DeviceDefinitionPropertySchema = DeviceDefinitionPropertySchema;
module.exports.DeviceDefinitionProperty = DeviceDefinitionProperty;
