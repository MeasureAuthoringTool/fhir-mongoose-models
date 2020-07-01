const mongoose = require('mongoose/browser');
const { ChargeItemDefinitionApplicabilitySchema } = require('./ChargeItemDefinitionApplicability');
const { ChargeItemDefinitionPropertyGroupSchema } = require('./ChargeItemDefinitionPropertyGroup');
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
const { UsageContextSchema } = require('./UsageContext');

const ChargeItemDefinitionSchema = DomainResourceSchemaFunction({
  url: PrimitiveUriSchema,
  identifier: [IdentifierSchema],
  version: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  derivedFromUri: [PrimitiveUriSchema],
  partOf: [PrimitiveCanonicalSchema],
  replaces: [PrimitiveCanonicalSchema],
  status: PublicationStatusSchema,
  experimental: PrimitiveBooleanSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  description: PrimitiveMarkdownSchema,
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
  copyright: PrimitiveMarkdownSchema,
  approvalDate: PrimitiveDateSchema,
  lastReviewDate: PrimitiveDateSchema,
  effectivePeriod: PeriodSchema,
  code: CodeableConceptSchema,
  instance: [ReferenceSchema],
  applicability: [ChargeItemDefinitionApplicabilitySchema],
  propertyGroup: [ChargeItemDefinitionPropertyGroupSchema],
  typeName: { type: String, default: 'ChargeItemDefinition' },
  _type: { type: String, default: 'FHIR::ChargeItemDefinition' },
});

class ChargeItemDefinition extends mongoose.Document {
  constructor(object) {
    super(object, ChargeItemDefinitionSchema);
    this.typeName = 'ChargeItemDefinition';
    this._type = 'FHIR::ChargeItemDefinition';
  }
}

module.exports.ChargeItemDefinitionSchema = ChargeItemDefinitionSchema;
module.exports.ChargeItemDefinition = ChargeItemDefinition;
