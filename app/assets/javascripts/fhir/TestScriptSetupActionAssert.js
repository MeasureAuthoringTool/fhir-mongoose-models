const mongoose = require('mongoose/browser');
const { AssertionDirectionTypeSchema } = require('./AssertionDirectionType');
const { AssertionOperatorTypeSchema } = require('./AssertionOperatorType');
const { AssertionResponseTypesSchema } = require('./AssertionResponseTypes');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { FHIRDefinedTypeSchema } = require('./FHIRDefinedType');
const { MimeTypeSchema } = require('./MimeType');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { TestScriptRequestMethodCodeSchema } = require('./TestScriptRequestMethodCode');

const TestScriptSetupActionAssertSchema = BackboneElementSchemaFunction({
  label: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  direction: AssertionDirectionTypeSchema,
  compareToSourceId: PrimitiveStringSchema,
  compareToSourceExpression: PrimitiveStringSchema,
  compareToSourcePath: PrimitiveStringSchema,
  contentType: MimeTypeSchema,
  expression: PrimitiveStringSchema,
  headerField: PrimitiveStringSchema,
  minimumId: PrimitiveStringSchema,
  navigationLinks: PrimitiveBooleanSchema,
  operator: AssertionOperatorTypeSchema,
  path: PrimitiveStringSchema,
  requestMethod: TestScriptRequestMethodCodeSchema,
  requestURL: PrimitiveStringSchema,
  resource: FHIRDefinedTypeSchema,
  response: AssertionResponseTypesSchema,
  responseCode: PrimitiveStringSchema,
  sourceId: PrimitiveIdSchema,
  validateProfileId: PrimitiveIdSchema,
  value: PrimitiveStringSchema,
  warningOnly: PrimitiveBooleanSchema,
  typeName: { type: String, default: 'TestScriptSetupActionAssert' },
  _type: { type: String, default: 'FHIR::TestScriptSetupActionAssert' },
});

class TestScriptSetupActionAssert extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptSetupActionAssertSchema);
    this.typeName = 'TestScriptSetupActionAssert';
    this._type = 'FHIR::TestScriptSetupActionAssert';
  }
}

module.exports.TestScriptSetupActionAssertSchema = TestScriptSetupActionAssertSchema;
module.exports.TestScriptSetupActionAssert = TestScriptSetupActionAssert;
