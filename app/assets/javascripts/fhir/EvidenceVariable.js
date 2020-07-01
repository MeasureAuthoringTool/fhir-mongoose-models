const mongoose = require('mongoose/browser');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { EvidenceVariableCharacteristicSchema } = require('./EvidenceVariableCharacteristic');
const { EvidenceVariableTypeSchema } = require('./EvidenceVariableType');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { RelatedArtifactSchema } = require('./RelatedArtifact');
const { UsageContextSchema } = require('./UsageContext');

const EvidenceVariableSchema = DomainResourceSchemaFunction({
  url: PrimitiveUriSchema,
  identifier: [IdentifierSchema],
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  shortTitle: PrimitiveStringSchema,
  subtitle: PrimitiveStringSchema,
  status: PublicationStatusSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  description: PrimitiveMarkdownSchema,
  note: [AnnotationSchema],
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
  copyright: PrimitiveMarkdownSchema,
  approvalDate: PrimitiveDateSchema,
  lastReviewDate: PrimitiveDateSchema,
  effectivePeriod: PeriodSchema,
  topic: [CodeableConceptSchema],
  author: [ContactDetailSchema],
  editor: [ContactDetailSchema],
  reviewer: [ContactDetailSchema],
  endorser: [ContactDetailSchema],
  relatedArtifact: [RelatedArtifactSchema],
  type: EvidenceVariableTypeSchema,
  characteristic: [EvidenceVariableCharacteristicSchema],
  typeName: { type: String, default: 'EvidenceVariable' },
  _type: { type: String, default: 'FHIR::EvidenceVariable' },
});

class EvidenceVariable extends mongoose.Document {
  constructor(object) {
    super(object, EvidenceVariableSchema);
    this.typeName = 'EvidenceVariable';
    this._type = 'FHIR::EvidenceVariable';
  }
}

module.exports.EvidenceVariableSchema = EvidenceVariableSchema;
module.exports.EvidenceVariable = EvidenceVariable;
