const mongoose = require('mongoose/browser');
const { CapabilityStatementKindSchema } = require('./CapabilityStatementKind');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodeSearchSupportSchema } = require('./CodeSearchSupport');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { TerminologyCapabilitiesClosureSchema } = require('./TerminologyCapabilitiesClosure');
const { TerminologyCapabilitiesCodeSystemSchema } = require('./TerminologyCapabilitiesCodeSystem');
const { TerminologyCapabilitiesExpansionSchema } = require('./TerminologyCapabilitiesExpansion');
const { TerminologyCapabilitiesImplementationSchema } = require('./TerminologyCapabilitiesImplementation');
const { TerminologyCapabilitiesSoftwareSchema } = require('./TerminologyCapabilitiesSoftware');
const { TerminologyCapabilitiesTranslationSchema } = require('./TerminologyCapabilitiesTranslation');
const { TerminologyCapabilitiesValidateCodeSchema } = require('./TerminologyCapabilitiesValidateCode');
const { UsageContextSchema } = require('./UsageContext');

const TerminologyCapabilitiesSchema = DomainResourceSchemaFunction({
  url: PrimitiveUriSchema,
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
  kind: CapabilityStatementKindSchema,
  software: TerminologyCapabilitiesSoftwareSchema,
  implementation: TerminologyCapabilitiesImplementationSchema,
  lockedDate: PrimitiveBooleanSchema,
  codeSystem: [TerminologyCapabilitiesCodeSystemSchema],
  expansion: TerminologyCapabilitiesExpansionSchema,
  codeSearch: CodeSearchSupportSchema,
  validateCode: TerminologyCapabilitiesValidateCodeSchema,
  translation: TerminologyCapabilitiesTranslationSchema,
  closure: TerminologyCapabilitiesClosureSchema,
  typeName: { type: String, default: 'TerminologyCapabilities' },
  _type: { type: String, default: 'FHIR::TerminologyCapabilities' },
});

class TerminologyCapabilities extends mongoose.Document {
  constructor(object) {
    super(object, TerminologyCapabilitiesSchema);
    this.typeName = 'TerminologyCapabilities';
    this._type = 'FHIR::TerminologyCapabilities';
  }
}

module.exports.TerminologyCapabilitiesSchema = TerminologyCapabilitiesSchema;
module.exports.TerminologyCapabilities = TerminologyCapabilities;
