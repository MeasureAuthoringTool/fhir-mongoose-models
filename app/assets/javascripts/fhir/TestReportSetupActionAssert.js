const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { TestReportActionResultSchema } = require('./TestReportActionResult');

const TestReportSetupActionAssertSchema = BackboneElementSchemaFunction({
  result: TestReportActionResultSchema,
  message: PrimitiveMarkdownSchema,
  detail: PrimitiveStringSchema,
  typeName: { type: String, default: 'TestReportSetupActionAssert' },
  _type: { type: String, default: 'FHIR::TestReportSetupActionAssert' },
});

class TestReportSetupActionAssert extends mongoose.Document {
  constructor(object) {
    super(object, TestReportSetupActionAssertSchema);
    this.typeName = 'TestReportSetupActionAssert';
    this._type = 'FHIR::TestReportSetupActionAssert';
  }
}

module.exports.TestReportSetupActionAssertSchema = TestReportSetupActionAssertSchema;
module.exports.TestReportSetupActionAssert = TestReportSetupActionAssert;
