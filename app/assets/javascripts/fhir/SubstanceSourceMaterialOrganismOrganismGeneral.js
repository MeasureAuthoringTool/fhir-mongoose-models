const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');

const SubstanceSourceMaterialOrganismOrganismGeneralSchema = BackboneElementSchemaFunction({
  kingdom: CodeableConceptSchema,
  phylum: CodeableConceptSchema,
  class: CodeableConceptSchema,
  order: CodeableConceptSchema,
  typeName: { type: String, default: 'SubstanceSourceMaterialOrganismOrganismGeneral' },
  _type: { type: String, default: 'FHIR::SubstanceSourceMaterialOrganismOrganismGeneral' },
});

class SubstanceSourceMaterialOrganismOrganismGeneral extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSourceMaterialOrganismOrganismGeneralSchema);
    this.typeName = 'SubstanceSourceMaterialOrganismOrganismGeneral';
    this._type = 'FHIR::SubstanceSourceMaterialOrganismOrganismGeneral';
  }
}

module.exports.SubstanceSourceMaterialOrganismOrganismGeneralSchema = SubstanceSourceMaterialOrganismOrganismGeneralSchema;
module.exports.SubstanceSourceMaterialOrganismOrganismGeneral = SubstanceSourceMaterialOrganismOrganismGeneral;
