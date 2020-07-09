const { ElementSchema } = require('./Element');
const { GuideParameterCodeSchema } = require('./allSchemaHeaders.js');

GuideParameterCodeSchema.add(ElementSchema);
GuideParameterCodeSchema.remove('id');
GuideParameterCodeSchema.add({
  value: String,
});

module.exports.GuideParameterCodeSchema = GuideParameterCodeSchema;
