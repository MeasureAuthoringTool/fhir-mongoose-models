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

const SubstanceSourceMaterialFractionDescriptionSchema = BackboneElementSchemaFunction({
   fraction : String,
   materialType : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'SubstanceSourceMaterialFractionDescription' },
});

class SubstanceSourceMaterialFractionDescription extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSourceMaterialFractionDescriptionSchema);
    this._type = 'FHIR::SubstanceSourceMaterialFractionDescription';
  }
};


module.exports.SubstanceSourceMaterialFractionDescriptionSchema = SubstanceSourceMaterialFractionDescriptionSchema;
module.exports.SubstanceSourceMaterialFractionDescription = SubstanceSourceMaterialFractionDescription;
