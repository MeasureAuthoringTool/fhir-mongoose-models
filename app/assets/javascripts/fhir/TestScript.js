const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactDetailSchema } = require('./ContactDetail');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
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
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestScriptSchema = DomainResourceSchemaFunction({
   url : String,
   identifier : IdentifierSchema,
   version : String,
   name : String,
   title : String,
   status : PublicationStatusSchema,
   experimental : Boolean,
   date : DateTime,
   publisher : String,
   contact : [ContactDetailSchema],
   description : String,
   useContext : [UsageContextSchema],
   jurisdiction : [CodeableConceptSchema],
   purpose : String,
   copyright : String,
   origin : [TestScriptOriginSchema],
   destination : [TestScriptDestinationSchema],
   metadata : TestScriptMetadataSchema,
   fixture : [TestScriptFixtureSchema],
   profile : [ReferenceSchema],
   variable : [TestScriptVariableSchema],
   setup : TestScriptSetupSchema,
   test : [TestScriptTestSchema],
   teardown : TestScriptTeardownSchema,
   fhirTitle: { type: String, default: 'TestScript' },
});

class TestScript extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptSchema);
    this._type = 'FHIR::TestScript';
  }
};


module.exports.TestScriptSchema = TestScriptSchema;
module.exports.TestScript = TestScript;
