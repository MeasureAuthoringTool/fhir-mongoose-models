const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ContactDetailSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { PublicationStatusSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { TestScriptDestinationSchema } = require('./allSchemaHeaders.js');
const { TestScriptFixtureSchema } = require('./allSchemaHeaders.js');
const { TestScriptMetadataSchema } = require('./allSchemaHeaders.js');
const { TestScriptOriginSchema } = require('./allSchemaHeaders.js');
const { TestScriptSetupSchema } = require('./allSchemaHeaders.js');
const { TestScriptTeardownSchema } = require('./allSchemaHeaders.js');
const { TestScriptTestSchema } = require('./allSchemaHeaders.js');
const { TestScriptVariableSchema } = require('./allSchemaHeaders.js');
const { UsageContextSchema } = require('./allSchemaHeaders.js');
const { TestScriptSchema } = require('./allSchemaHeaders.js');

TestScriptSchema.add(DomainResourceSchema);
TestScriptSchema.remove('id');
TestScriptSchema.add({
  url: PrimitiveUriSchema,
  identifier: IdentifierSchema,
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
  origin: [TestScriptOriginSchema],
  destination: [TestScriptDestinationSchema],
  metadata: TestScriptMetadataSchema,
  fixture: [TestScriptFixtureSchema],
  profile: [ReferenceSchema],
  variable: [TestScriptVariableSchema],
  setup: TestScriptSetupSchema,
  test: [TestScriptTestSchema],
  teardown: TestScriptTeardownSchema,
});

module.exports.TestScriptSchema = TestScriptSchema;
