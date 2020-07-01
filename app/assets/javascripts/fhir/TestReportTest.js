const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { TestReportTestActionSchema } = require('./TestReportTestAction');

const TestReportTestSchema = BackboneElementSchemaFunction({
  name: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  action: [TestReportTestActionSchema],
  typeName: { type: String, default: 'TestReportTest' },
  _type: { type: String, default: 'FHIR::TestReportTest' },
});

class TestReportTest extends mongoose.Document {
  constructor(object) {
    super(object, TestReportTestSchema);
    this.typeName = 'TestReportTest';
    this._type = 'FHIR::TestReportTest';
  }
}

module.exports.TestReportTestSchema = TestReportTestSchema;
module.exports.TestReportTest = TestReportTest;
