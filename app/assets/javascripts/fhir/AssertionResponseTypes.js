const { ElementSchema } = require('./Element');
const { AssertionResponseTypesSchema } = require('./allSchemaHeaders.js');

AssertionResponseTypesSchema.add(ElementSchema);
AssertionResponseTypesSchema.remove('id');
AssertionResponseTypesSchema.add({
  value: String,
});

module.exports.AssertionResponseTypesSchema = AssertionResponseTypesSchema;
