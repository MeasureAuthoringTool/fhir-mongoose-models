const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');

const TestScriptOriginSchema = BackboneElementSchemaFunction({
  index: PrimitiveIntegerSchema,
  profile: CodingSchema,
  typeName: { type: String, default: 'TestScriptOrigin' },
  _type: { type: String, default: 'FHIR::TestScriptOrigin' },
});

class TestScriptOrigin extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptOriginSchema);
    this.typeName = 'TestScriptOrigin';
    this._type = 'FHIR::TestScriptOrigin';
  }
}

module.exports.TestScriptOriginSchema = TestScriptOriginSchema;
module.exports.TestScriptOrigin = TestScriptOrigin;
