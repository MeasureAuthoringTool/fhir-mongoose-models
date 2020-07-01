const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');

const SubstanceReferenceInformationGeneElementSchema = BackboneElementSchemaFunction({
  type: CodeableConceptSchema,
  element: IdentifierSchema,
  source: [ReferenceSchema],
  typeName: { type: String, default: 'SubstanceReferenceInformationGeneElement' },
  _type: { type: String, default: 'FHIR::SubstanceReferenceInformationGeneElement' },
});

class SubstanceReferenceInformationGeneElement extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceReferenceInformationGeneElementSchema);
    this.typeName = 'SubstanceReferenceInformationGeneElement';
    this._type = 'FHIR::SubstanceReferenceInformationGeneElement';
  }
}

module.exports.SubstanceReferenceInformationGeneElementSchema = SubstanceReferenceInformationGeneElementSchema;
module.exports.SubstanceReferenceInformationGeneElement = SubstanceReferenceInformationGeneElement;
