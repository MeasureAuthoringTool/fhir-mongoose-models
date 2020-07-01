const mongoose = require('mongoose/browser');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SubstanceReferenceInformationClassificationSchema } = require('./SubstanceReferenceInformationClassification');
const { SubstanceReferenceInformationGeneSchema } = require('./SubstanceReferenceInformationGene');
const { SubstanceReferenceInformationGeneElementSchema } = require('./SubstanceReferenceInformationGeneElement');
const { SubstanceReferenceInformationTargetSchema } = require('./SubstanceReferenceInformationTarget');

const SubstanceReferenceInformationSchema = DomainResourceSchemaFunction({
  comment: PrimitiveStringSchema,
  gene: [SubstanceReferenceInformationGeneSchema],
  geneElement: [SubstanceReferenceInformationGeneElementSchema],
  classification: [SubstanceReferenceInformationClassificationSchema],
  target: [SubstanceReferenceInformationTargetSchema],
  typeName: { type: String, default: 'SubstanceReferenceInformation' },
  _type: { type: String, default: 'FHIR::SubstanceReferenceInformation' },
});

class SubstanceReferenceInformation extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceReferenceInformationSchema);
    this.typeName = 'SubstanceReferenceInformation';
    this._type = 'FHIR::SubstanceReferenceInformation';
  }
}

module.exports.SubstanceReferenceInformationSchema = SubstanceReferenceInformationSchema;
module.exports.SubstanceReferenceInformation = SubstanceReferenceInformation;
