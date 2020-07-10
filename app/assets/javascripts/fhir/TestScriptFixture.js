const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { TestScriptFixtureSchema } = require('./allSchemaHeaders.js');

TestScriptFixtureSchema.add(BackboneElementSchema);
TestScriptFixtureSchema.remove('id');
TestScriptFixtureSchema.add({
  autocreate: PrimitiveBooleanSchema,
  autodelete: PrimitiveBooleanSchema,
  resource: ReferenceSchema,
});

module.exports.TestScriptFixtureSchema = TestScriptFixtureSchema;
