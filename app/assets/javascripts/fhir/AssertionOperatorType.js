const { ElementSchema } = require('./Element');
const { AssertionOperatorTypeSchema } = require('./allSchemaHeaders.js');

AssertionOperatorTypeSchema.add(ElementSchema);
AssertionOperatorTypeSchema.remove('id');
AssertionOperatorTypeSchema.add({
  value: String,
});

module.exports.AssertionOperatorTypeSchema = AssertionOperatorTypeSchema;
