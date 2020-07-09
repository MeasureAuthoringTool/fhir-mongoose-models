const { ElementSchema } = require('./Element');
const { GuidePageGenerationSchema } = require('./allSchemaHeaders.js');

GuidePageGenerationSchema.add(ElementSchema);
GuidePageGenerationSchema.remove('id');
GuidePageGenerationSchema.add({
  value: String,
});

module.exports.GuidePageGenerationSchema = GuidePageGenerationSchema;
