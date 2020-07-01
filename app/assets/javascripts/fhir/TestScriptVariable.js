const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const TestScriptVariableSchema = BackboneElementSchemaFunction({
  name: PrimitiveStringSchema,
  defaultValue: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  expression: PrimitiveStringSchema,
  headerField: PrimitiveStringSchema,
  hint: PrimitiveStringSchema,
  path: PrimitiveStringSchema,
  sourceId: PrimitiveIdSchema,
  typeName: { type: String, default: 'TestScriptVariable' },
  _type: { type: String, default: 'FHIR::TestScriptVariable' },
});

class TestScriptVariable extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptVariableSchema);
    this.typeName = 'TestScriptVariable';
    this._type = 'FHIR::TestScriptVariable';
  }
}

module.exports.TestScriptVariableSchema = TestScriptVariableSchema;
module.exports.TestScriptVariable = TestScriptVariable;
