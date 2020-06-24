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

const TestScriptTestActionSchema = BackboneElementSchemaFunction({
   operation : TestScriptSetupActionOperationSchema,
   assert : TestScriptSetupActionAssertSchema,
   fhirTitle: { type: String, default: 'TestScriptTestAction' },
});

class TestScriptTestAction extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptTestActionSchema);
    this._type = 'FHIR::TestScriptTestAction';
  }
};


module.exports.TestScriptTestActionSchema = TestScriptTestActionSchema;
module.exports.TestScriptTestAction = TestScriptTestAction;
