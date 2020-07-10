const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { OperationDefinitionOverloadSchema } = require('./allSchemaHeaders.js');
const { OperationDefinitionParameterSchema } = require('./allSchemaHeaders.js');
const { OperationKindSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCodeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');
const { ResourceTypeSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { OperationDefinitionSchema } = require('./allSchemaHeaders.js');

OperationDefinitionSchema.add(DomainResourceSchema);
OperationDefinitionSchema.remove('id');
OperationDefinitionSchema.add({
  url: PrimitiveUriSchema,
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  title: PrimitiveStringSchema,
  status: PublicationStatusSchema,
  kind: OperationKindSchema,
  experimental: PrimitiveBooleanSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  description: PrimitiveMarkdownSchema,
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
  purpose: PrimitiveMarkdownSchema,
  affectsState: PrimitiveBooleanSchema,
  code: PrimitiveCodeSchema,
  comment: PrimitiveMarkdownSchema,
  base: PrimitiveCanonicalSchema,
  resource: [ResourceTypeSchema],
  system: PrimitiveBooleanSchema,
  type: PrimitiveBooleanSchema,
  instance: PrimitiveBooleanSchema,
  inputProfile: PrimitiveCanonicalSchema,
  outputProfile: PrimitiveCanonicalSchema,
  parameter: [OperationDefinitionParameterSchema],
  overload: [OperationDefinitionOverloadSchema],
});

module.exports.OperationDefinitionSchema = OperationDefinitionSchema;
