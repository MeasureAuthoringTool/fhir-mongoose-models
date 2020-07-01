const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { TestReportActionResultSchema } = require('./TestReportActionResult');

const TestReportSetupActionOperationSchema = BackboneElementSchemaFunction({
  result: TestReportActionResultSchema,
  message: PrimitiveMarkdownSchema,
  detail: PrimitiveUriSchema,
  typeName: { type: String, default: 'TestReportSetupActionOperation' },
  _type: { type: String, default: 'FHIR::TestReportSetupActionOperation' },
});

class TestReportSetupActionOperation extends mongoose.Document {
  constructor(object) {
    super(object, TestReportSetupActionOperationSchema);
    this.typeName = 'TestReportSetupActionOperation';
    this._type = 'FHIR::TestReportSetupActionOperation';
  }
}

module.exports.TestReportSetupActionOperationSchema = TestReportSetupActionOperationSchema;
module.exports.TestReportSetupActionOperation = TestReportSetupActionOperation;
