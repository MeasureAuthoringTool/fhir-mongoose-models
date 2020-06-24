const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { TestScriptSetupActionSchema } = require('./TestScriptSetupAction');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestScriptSetupSchema = BackboneElementSchemaFunction({
   action : [TestScriptSetupActionSchema],
   fhirTitle: { type: String, default: 'TestScriptSetup' },
});

class TestScriptSetup extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptSetupSchema);
    this._type = 'FHIR::TestScriptSetup';
  }
};


module.exports.TestScriptSetupSchema = TestScriptSetupSchema;
module.exports.TestScriptSetup = TestScriptSetup;
