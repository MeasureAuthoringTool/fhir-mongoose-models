const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestScriptFixtureSchema = BackboneElementSchemaFunction({
   autocreate : Boolean,
   autodelete : Boolean,
   resource : ReferenceSchema,
   fhirTitle: { type: String, default: 'TestScriptFixture' },
});

class TestScriptFixture extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptFixtureSchema);
    this._type = 'FHIR::TestScriptFixture';
  }
};


module.exports.TestScriptFixtureSchema = TestScriptFixtureSchema;
module.exports.TestScriptFixture = TestScriptFixture;
