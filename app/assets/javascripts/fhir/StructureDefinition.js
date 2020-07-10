const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { FHIRVersionSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');
const { StructureDefinitionContextSchema } = require('./allSchemaHeaders.js');
const { StructureDefinitionDifferentialSchema } = require('./allSchemaHeaders.js');
const { StructureDefinitionKindSchema } = require('./allSchemaHeaders.js');
const { StructureDefinitionMappingSchema } = require('./allSchemaHeaders.js');
const { StructureDefinitionSnapshotSchema } = require('./allSchemaHeaders.js');
const { TypeDerivationRuleSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { StructureDefinitionSchema } = require('./allSchemaHeaders.js');

StructureDefinitionSchema.add(DomainResourceSchema);
StructureDefinitionSchema.remove('id');
StructureDefinitionSchema.add({
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
  keyword: [CodingSchema],
  fhirVersion: FHIRVersionSchema,
  mapping: [StructureDefinitionMappingSchema],
  kind: StructureDefinitionKindSchema,
  abstract: PrimitiveBooleanSchema,
  context: [StructureDefinitionContextSchema],
  contextInvariant: [PrimitiveStringSchema],
  type: PrimitiveUriSchema,
  baseDefinition: PrimitiveCanonicalSchema,
  derivation: TypeDerivationRuleSchema,
  snapshot: StructureDefinitionSnapshotSchema,
  differential: StructureDefinitionDifferentialSchema,
});

module.exports.StructureDefinitionSchema = StructureDefinitionSchema;
