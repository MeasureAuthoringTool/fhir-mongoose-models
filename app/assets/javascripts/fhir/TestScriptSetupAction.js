const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { TestScriptSetupActionAssertSchema } = require('./TestScriptSetupActionAssert');
const { TestScriptSetupActionOperationSchema } = require('./TestScriptSetupActionOperation');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestScriptSetupActionSchema = BackboneElementSchemaFunction({
   operation : TestScriptSetupActionOperationSchema,
   assert : TestScriptSetupActionAssertSchema,
   fhirTitle: { type: String, default: 'TestScriptSetupAction' },
});

class TestScriptSetupAction extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptSetupActionSchema);
    this._type = 'FHIR::TestScriptSetupAction';
  }
};


module.exports.TestScriptSetupActionSchema = TestScriptSetupActionSchema;
module.exports.TestScriptSetupAction = TestScriptSetupAction;
