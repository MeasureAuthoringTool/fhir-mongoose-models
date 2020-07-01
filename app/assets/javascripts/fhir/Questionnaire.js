const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
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
const { QuestionnaireItemSchema } = require('./QuestionnaireItem');
const { ResourceTypeSchema } = require('./ResourceType');
const { UsageContextSchema } = require('./UsageContext');

const QuestionnaireSchema = DomainResourceSchemaFunction({
  url: PrimitiveUriSchema,
  identifier: [IdentifierSchema],
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  derivedFrom: [PrimitiveCanonicalSchema],
  status: PublicationStatusSchema,
  experimental: PrimitiveBooleanSchema,
  subjectType: [ResourceTypeSchema],
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  description: PrimitiveMarkdownSchema,
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
  purpose: PrimitiveMarkdownSchema,
  copyright: PrimitiveMarkdownSchema,
  approvalDate: PrimitiveDateSchema,
  lastReviewDate: PrimitiveDateSchema,
  effectivePeriod: PeriodSchema,
  code: [CodingSchema],
  item: [QuestionnaireItemSchema],
  typeName: { type: String, default: 'Questionnaire' },
  _type: { type: String, default: 'FHIR::Questionnaire' },
});

class Questionnaire extends mongoose.Document {
  constructor(object) {
    super(object, QuestionnaireSchema);
    this.typeName = 'Questionnaire';
    this._type = 'FHIR::Questionnaire';
  }
}

module.exports.QuestionnaireSchema = QuestionnaireSchema;
module.exports.Questionnaire = Questionnaire;
