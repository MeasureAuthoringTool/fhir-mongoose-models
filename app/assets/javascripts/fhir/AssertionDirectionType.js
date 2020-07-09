const { ElementSchema } = require('./Element');
const { AssertionDirectionTypeSchema } = require('./allSchemaHeaders.js');

AssertionDirectionTypeSchema.add(ElementSchema);
AssertionDirectionTypeSchema.remove('id');
AssertionDirectionTypeSchema.add({
  value: String,
});

module.exports.AssertionDirectionTypeSchema = AssertionDirectionTypeSchema;
