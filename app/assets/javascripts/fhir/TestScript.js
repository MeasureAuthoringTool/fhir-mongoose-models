const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { PublicationStatusSchema } = require('./PublicationStatus');
const { ReferenceSchema } = require('./Reference');
const { TestScriptDestinationSchema } = require('./TestScriptDestination');
const { TestScriptFixtureSchema } = require('./TestScriptFixture');
const { TestScriptMetadataSchema } = require('./TestScriptMetadata');
const { TestScriptOriginSchema } = require('./TestScriptOrigin');
const { TestScriptSetupSchema } = require('./TestScriptSetup');
const { TestScriptTeardownSchema } = require('./TestScriptTeardown');
const { TestScriptTestSchema } = require('./TestScriptTest');
const { TestScriptVariableSchema } = require('./TestScriptVariable');
const { UsageContextSchema } = require('./UsageContext');

const TestScriptSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'TestScript' },
  _type: { type: String, default: 'FHIR::TestScript' },
});

class TestScript extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptSchema);
    this.typeName = 'TestScript';
    this._type = 'FHIR::TestScript';
  }
}

module.exports.TestScriptSchema = TestScriptSchema;
module.exports.TestScript = TestScript;
