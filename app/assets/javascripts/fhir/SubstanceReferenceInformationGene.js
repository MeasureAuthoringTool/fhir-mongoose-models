const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const SubstanceReferenceInformationGeneSchema = BackboneElementSchemaFunction({
  geneSequenceOrigin: CodeableConceptSchema,
  gene: CodeableConceptSchema,
  source: [ReferenceSchema],
  typeName: { type: String, default: 'SubstanceReferenceInformationGene' },
  _type: { type: String, default: 'FHIR::SubstanceReferenceInformationGene' },
});

class SubstanceReferenceInformationGene extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceReferenceInformationGeneSchema);
    this.typeName = 'SubstanceReferenceInformationGene';
    this._type = 'FHIR::SubstanceReferenceInformationGene';
  }
}

module.exports.SubstanceReferenceInformationGeneSchema = SubstanceReferenceInformationGeneSchema;
module.exports.SubstanceReferenceInformationGene = SubstanceReferenceInformationGene;
