const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { ExampleScenarioActorSchema } = require('./allSchemaHeaders.js');
const { ExampleScenarioInstanceSchema } = require('./allSchemaHeaders.js');
const { ExampleScenarioProcessSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { ExampleScenarioSchema } = require('./allSchemaHeaders.js');

ExampleScenarioSchema.add(DomainResourceSchema);
ExampleScenarioSchema.remove('id');
ExampleScenarioSchema.add({
  url: PrimitiveUriSchema,
  identifier: [IdentifierSchema],
  version: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  status: PublicationStatusSchema,
  experimental: PrimitiveBooleanSchema,
  date: PrimitiveDateTimeSchema,
  publisher: PrimitiveStringSchema,
  contact: [ContactDetailSchema],
  useContext: [UsageContextSchema],
  jurisdiction: [CodeableConceptSchema],
  copyright: PrimitiveMarkdownSchema,
  purpose: PrimitiveMarkdownSchema,
  actor: [ExampleScenarioActorSchema],
  instance: [ExampleScenarioInstanceSchema],
  process: [ExampleScenarioProcessSchema],
  workflow: [PrimitiveCanonicalSchema],
});

module.exports.ExampleScenarioSchema = ExampleScenarioSchema;
