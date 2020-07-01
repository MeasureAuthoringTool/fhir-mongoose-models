const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const SubstanceSourceMaterialFractionDescriptionSchema = BackboneElementSchemaFunction({
  fraction: PrimitiveStringSchema,
  materialType: CodeableConceptSchema,
  typeName: { type: String, default: 'SubstanceSourceMaterialFractionDescription' },
  _type: { type: String, default: 'FHIR::SubstanceSourceMaterialFractionDescription' },
});

class SubstanceSourceMaterialFractionDescription extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSourceMaterialFractionDescriptionSchema);
    this.typeName = 'SubstanceSourceMaterialFractionDescription';
    this._type = 'FHIR::SubstanceSourceMaterialFractionDescription';
  }
}

module.exports.SubstanceSourceMaterialFractionDescriptionSchema = SubstanceSourceMaterialFractionDescriptionSchema;
module.exports.SubstanceSourceMaterialFractionDescription = SubstanceSourceMaterialFractionDescription;
