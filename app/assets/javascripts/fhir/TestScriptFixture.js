const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { ReferenceSchema } = require('./Reference');

const TestScriptFixtureSchema = BackboneElementSchemaFunction({
  autocreate: PrimitiveBooleanSchema,
  autodelete: PrimitiveBooleanSchema,
  resource: ReferenceSchema,
  typeName: { type: String, default: 'TestScriptFixture' },
  _type: { type: String, default: 'FHIR::TestScriptFixture' },
});

class TestScriptFixture extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptFixtureSchema);
    this.typeName = 'TestScriptFixture';
    this._type = 'FHIR::TestScriptFixture';
  }
}

module.exports.TestScriptFixtureSchema = TestScriptFixtureSchema;
module.exports.TestScriptFixture = TestScriptFixture;
