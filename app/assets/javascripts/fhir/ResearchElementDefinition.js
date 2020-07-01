const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateSchema } = require('./PrimitiveDate');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { ReferenceSchema } = require('./Reference');
const { RelatedArtifactSchema } = require('./RelatedArtifact');
const { ResearchElementDefinitionCharacteristicSchema } = require('./ResearchElementDefinitionCharacteristic');
const { ResearchElementTypeSchema } = require('./ResearchElementType');
const { UsageContextSchema } = require('./UsageContext');
const { VariableTypeSchema } = require('./VariableType');

const ResearchElementDefinitionSchema = DomainResourceSchemaFunction({
  url: PrimitiveUriSchema,
  identifier: [IdentifierSchema],
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  shortTitle: PrimitiveStringSchema,
  subtitle: PrimitiveStringSchema,
  status: PublicationStatusSchema,
  experimental: PrimitiveBooleanSchema,
  subjectCodeableConcept: CodeableConceptSchema,
  subjectReference: ReferenceSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  description: PrimitiveMarkdownSchema,
  comment: [PrimitiveStringSchema],
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
  purpose: PrimitiveMarkdownSchema,
  usage: PrimitiveStringSchema,
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
  library: [PrimitiveCanonicalSchema],
  type: ResearchElementTypeSchema,
  variableType: VariableTypeSchema,
  characteristic: [ResearchElementDefinitionCharacteristicSchema],
  typeName: { type: String, default: 'ResearchElementDefinition' },
  _type: { type: String, default: 'FHIR::ResearchElementDefinition' },
});

class ResearchElementDefinition extends mongoose.Document {
  constructor(object) {
    super(object, ResearchElementDefinitionSchema);
    this.typeName = 'ResearchElementDefinition';
    this._type = 'FHIR::ResearchElementDefinition';
  }
}

module.exports.ResearchElementDefinitionSchema = ResearchElementDefinitionSchema;
module.exports.ResearchElementDefinition = ResearchElementDefinition;
