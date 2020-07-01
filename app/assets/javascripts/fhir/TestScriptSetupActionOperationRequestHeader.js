const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const TestScriptSetupActionOperationRequestHeaderSchema = BackboneElementSchemaFunction({
  field: PrimitiveStringSchema,
  value: PrimitiveStringSchema,
  typeName: { type: String, default: 'TestScriptSetupActionOperationRequestHeader' },
  _type: { type: String, default: 'FHIR::TestScriptSetupActionOperationRequestHeader' },
});

class TestScriptSetupActionOperationRequestHeader extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptSetupActionOperationRequestHeaderSchema);
    this.typeName = 'TestScriptSetupActionOperationRequestHeader';
    this._type = 'FHIR::TestScriptSetupActionOperationRequestHeader';
  }
}

module.exports.TestScriptSetupActionOperationRequestHeaderSchema = TestScriptSetupActionOperationRequestHeaderSchema;
module.exports.TestScriptSetupActionOperationRequestHeader = TestScriptSetupActionOperationRequestHeader;
