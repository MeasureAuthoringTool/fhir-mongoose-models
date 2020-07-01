const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { FHIRDefinedTypeSchema } = require('./FHIRDefinedType');
const { MimeTypeSchema } = require('./MimeType');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { TestScriptRequestMethodCodeSchema } = require('./TestScriptRequestMethodCode');
const { TestScriptSetupActionOperationRequestHeaderSchema } = require('./TestScriptSetupActionOperationRequestHeader');

const TestScriptSetupActionOperationSchema = BackboneElementSchemaFunction({
  type: CodingSchema,
  resource: FHIRDefinedTypeSchema,
  label: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  accept: MimeTypeSchema,
  contentType: MimeTypeSchema,
  destination: PrimitiveIntegerSchema,
  encodeRequestUrl: PrimitiveBooleanSchema,
  method: TestScriptRequestMethodCodeSchema,
  origin: PrimitiveIntegerSchema,
  params: PrimitiveStringSchema,
  requestHeader: [TestScriptSetupActionOperationRequestHeaderSchema],
  requestId: PrimitiveIdSchema,
  responseId: PrimitiveIdSchema,
  sourceId: PrimitiveIdSchema,
  targetId: PrimitiveIdSchema,
  url: PrimitiveStringSchema,
  typeName: { type: String, default: 'TestScriptSetupActionOperation' },
  _type: { type: String, default: 'FHIR::TestScriptSetupActionOperation' },
});

class TestScriptSetupActionOperation extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptSetupActionOperationSchema);
    this.typeName = 'TestScriptSetupActionOperation';
    this._type = 'FHIR::TestScriptSetupActionOperation';
  }
}

module.exports.TestScriptSetupActionOperationSchema = TestScriptSetupActionOperationSchema;
module.exports.TestScriptSetupActionOperation = TestScriptSetupActionOperation;
