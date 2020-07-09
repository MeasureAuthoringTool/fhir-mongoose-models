const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { FHIRVersionSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideDefinitionSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideDependsOnSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideGlobalSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideManifestSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveIdSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');
const { SPDXLicenseSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { ImplementationGuideSchema } = require('./allSchemaHeaders.js');

ImplementationGuideSchema.add(DomainResourceSchema);
ImplementationGuideSchema.remove('id');
ImplementationGuideSchema.add({
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
  copyright: PrimitiveMarkdownSchema,
  packageId: PrimitiveIdSchema,
  license: SPDXLicenseSchema,
  fhirVersion: [FHIRVersionSchema],
  dependsOn: [ImplementationGuideDependsOnSchema],
  global: [ImplementationGuideGlobalSchema],
  definition: ImplementationGuideDefinitionSchema,
  manifest: ImplementationGuideManifestSchema,
});

module.exports.ImplementationGuideSchema = ImplementationGuideSchema;
