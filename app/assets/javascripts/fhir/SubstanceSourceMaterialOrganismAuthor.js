const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const SubstanceSourceMaterialOrganismAuthorSchema = BackboneElementSchemaFunction({
  authorType: CodeableConceptSchema,
  authorDescription: PrimitiveStringSchema,
  typeName: { type: String, default: 'SubstanceSourceMaterialOrganismAuthor' },
  _type: { type: String, default: 'FHIR::SubstanceSourceMaterialOrganismAuthor' },
});

class SubstanceSourceMaterialOrganismAuthor extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSourceMaterialOrganismAuthorSchema);
    this.typeName = 'SubstanceSourceMaterialOrganismAuthor';
    this._type = 'FHIR::SubstanceSourceMaterialOrganismAuthor';
  }
}

module.exports.SubstanceSourceMaterialOrganismAuthorSchema = SubstanceSourceMaterialOrganismAuthorSchema;
module.exports.SubstanceSourceMaterialOrganismAuthor = SubstanceSourceMaterialOrganismAuthor;
