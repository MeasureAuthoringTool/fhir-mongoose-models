const { ElementSchema } = require('./Element');
const { TestScriptRequestMethodCodeSchema } = require('./allSchemaHeaders.js');

TestScriptRequestMethodCodeSchema.add(ElementSchema);
TestScriptRequestMethodCodeSchema.remove('id');
TestScriptRequestMethodCodeSchema.add({
  value: String,
});

module.exports.TestScriptRequestMethodCodeSchema = TestScriptRequestMethodCodeSchema;
