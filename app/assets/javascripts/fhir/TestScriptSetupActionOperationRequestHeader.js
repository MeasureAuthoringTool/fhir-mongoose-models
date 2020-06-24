const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestScriptSetupActionOperationRequestHeaderSchema = BackboneElementSchemaFunction({
   field : String,
   value : String,
   fhirTitle: { type: String, default: 'TestScriptSetupActionOperationRequestHeader' },
});

class TestScriptSetupActionOperationRequestHeader extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptSetupActionOperationRequestHeaderSchema);
    this._type = 'FHIR::TestScriptSetupActionOperationRequestHeader';
  }
};


module.exports.TestScriptSetupActionOperationRequestHeaderSchema = TestScriptSetupActionOperationRequestHeaderSchema;
module.exports.TestScriptSetupActionOperationRequestHeader = TestScriptSetupActionOperationRequestHeader;
