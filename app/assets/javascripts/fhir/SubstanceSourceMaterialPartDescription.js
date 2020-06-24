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

const SubstanceSourceMaterialPartDescriptionSchema = BackboneElementSchemaFunction({
   part : CodeableConceptSchema,
   partLocation : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'SubstanceSourceMaterialPartDescription' },
});

class SubstanceSourceMaterialPartDescription extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSourceMaterialPartDescriptionSchema);
    this._type = 'FHIR::SubstanceSourceMaterialPartDescription';
  }
};


module.exports.SubstanceSourceMaterialPartDescriptionSchema = SubstanceSourceMaterialPartDescriptionSchema;
module.exports.SubstanceSourceMaterialPartDescription = SubstanceSourceMaterialPartDescription;
