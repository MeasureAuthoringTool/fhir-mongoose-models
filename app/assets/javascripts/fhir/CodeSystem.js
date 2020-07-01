const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodeSystemConceptSchema } = require('./CodeSystemConcept');
const { CodeSystemContentModeSchema } = require('./CodeSystemContentMode');
const { CodeSystemFilterSchema } = require('./CodeSystemFilter');
const { CodeSystemHierarchyMeaningSchema } = require('./CodeSystemHierarchyMeaning');
const { CodeSystemPropertySchema } = require('./CodeSystemProperty');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUnsignedIntSchema } = require('./PrimitiveUnsignedInt');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { UsageContextSchema } = require('./UsageContext');

const CodeSystemSchema = DomainResourceSchemaFunction({
  url: PrimitiveUriSchema,
  identifier: [IdentifierSchema],
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  status: PublicationStatusSchema,
  experimental: PrimitiveBooleanSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  description: PrimitiveMarkdownSchema,
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
  purpose: PrimitiveMarkdownSchema,
  copyright: PrimitiveMarkdownSchema,
  caseSensitive: PrimitiveBooleanSchema,
  valueSet: PrimitiveCanonicalSchema,
  hierarchyMeaning: CodeSystemHierarchyMeaningSchema,
  compositional: PrimitiveBooleanSchema,
  versionNeeded: PrimitiveBooleanSchema,
  content: CodeSystemContentModeSchema,
  supplements: PrimitiveCanonicalSchema,
  count: PrimitiveUnsignedIntSchema,
  filter: [CodeSystemFilterSchema],
  property: [CodeSystemPropertySchema],
  concept: [CodeSystemConceptSchema],
  typeName: { type: String, default: 'CodeSystem' },
  _type: { type: String, default: 'FHIR::CodeSystem' },
});

class CodeSystem extends mongoose.Document {
  constructor(object) {
    super(object, CodeSystemSchema);
    this.typeName = 'CodeSystem';
    this._type = 'FHIR::CodeSystem';
  }
}

module.exports.CodeSystemSchema = CodeSystemSchema;
module.exports.CodeSystem = CodeSystem;
