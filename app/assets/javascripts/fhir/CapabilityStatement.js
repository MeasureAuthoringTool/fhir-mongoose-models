const { CapabilityStatementDocumentSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementImplementationSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementKindSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementMessagingSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementRestSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementSoftwareSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { FHIRVersionSchema } = require('./allSchemaHeaders.js');
const { MimeTypeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementSchema } = require('./allSchemaHeaders.js');

CapabilityStatementSchema.add(DomainResourceSchema);
CapabilityStatementSchema.remove('id');
CapabilityStatementSchema.add({
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
  instantiates: [PrimitiveCanonicalSchema],
  imports: [PrimitiveCanonicalSchema],
  software: CapabilityStatementSoftwareSchema,
  implementation: CapabilityStatementImplementationSchema,
  fhirVersion: FHIRVersionSchema,
  format: [MimeTypeSchema],
  patchFormat: [MimeTypeSchema],
  implementationGuide: [PrimitiveCanonicalSchema],
  rest: [CapabilityStatementRestSchema],
  messaging: [CapabilityStatementMessagingSchema],
  document: [CapabilityStatementDocumentSchema],
});

module.exports.CapabilityStatementSchema = CapabilityStatementSchema;
