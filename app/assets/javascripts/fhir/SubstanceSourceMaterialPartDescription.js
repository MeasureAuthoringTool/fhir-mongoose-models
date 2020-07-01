const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');

const SubstanceSourceMaterialPartDescriptionSchema = BackboneElementSchemaFunction({
  part: CodeableConceptSchema,
  partLocation: CodeableConceptSchema,
  typeName: { type: String, default: 'SubstanceSourceMaterialPartDescription' },
  _type: { type: String, default: 'FHIR::SubstanceSourceMaterialPartDescription' },
});

class SubstanceSourceMaterialPartDescription extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSourceMaterialPartDescriptionSchema);
    this.typeName = 'SubstanceSourceMaterialPartDescription';
    this._type = 'FHIR::SubstanceSourceMaterialPartDescription';
  }
}

module.exports.SubstanceSourceMaterialPartDescriptionSchema = SubstanceSourceMaterialPartDescriptionSchema;
module.exports.SubstanceSourceMaterialPartDescription = SubstanceSourceMaterialPartDescription;
