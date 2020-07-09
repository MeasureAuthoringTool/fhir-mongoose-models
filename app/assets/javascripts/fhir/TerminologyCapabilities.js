const { CapabilityStatementKindSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CodeSearchSupportSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesClosureSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesCodeSystemSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesExpansionSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesImplementationSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesSoftwareSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesTranslationSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesValidateCodeSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { TerminologyCapabilitiesSchema } = require('./allSchemaHeaders.js');

TerminologyCapabilitiesSchema.add(DomainResourceSchema);
TerminologyCapabilitiesSchema.remove('id');
TerminologyCapabilitiesSchema.add({
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
});

module.exports.TerminologyCapabilitiesSchema = TerminologyCapabilitiesSchema;
