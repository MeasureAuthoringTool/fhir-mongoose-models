const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { TestScriptSetupActionOperationSchema } = require('./TestScriptSetupActionOperation');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestScriptTeardownActionSchema = BackboneElementSchemaFunction({
   operation : TestScriptSetupActionOperationSchema,
   fhirTitle: { type: String, default: 'TestScriptTeardownAction' },
});

class TestScriptTeardownAction extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptTeardownActionSchema);
    this._type = 'FHIR::TestScriptTeardownAction';
  }
};


module.exports.TestScriptTeardownActionSchema = TestScriptTeardownActionSchema;
module.exports.TestScriptTeardownAction = TestScriptTeardownAction;
