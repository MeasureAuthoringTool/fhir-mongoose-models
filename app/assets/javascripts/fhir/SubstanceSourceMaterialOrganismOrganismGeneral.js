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

const SubstanceSourceMaterialOrganismOrganismGeneralSchema = BackboneElementSchemaFunction({
   kingdom : CodeableConceptSchema,
   phylum : CodeableConceptSchema,
   class : CodeableConceptSchema,
   order : CodeableConceptSchema,
   fhirTitle: { type: String, default: 'SubstanceSourceMaterialOrganismOrganismGeneral' },
});

class SubstanceSourceMaterialOrganismOrganismGeneral extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSourceMaterialOrganismOrganismGeneralSchema);
    this._type = 'FHIR::SubstanceSourceMaterialOrganismOrganismGeneral';
  }
};


module.exports.SubstanceSourceMaterialOrganismOrganismGeneralSchema = SubstanceSourceMaterialOrganismOrganismGeneralSchema;
module.exports.SubstanceSourceMaterialOrganismOrganismGeneral = SubstanceSourceMaterialOrganismOrganismGeneral;
