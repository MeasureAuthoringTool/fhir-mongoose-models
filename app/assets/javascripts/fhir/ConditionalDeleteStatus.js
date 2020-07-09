const { ElementSchema } = require('./Element');
const { ConditionalDeleteStatusSchema } = require('./allSchemaHeaders.js');

ConditionalDeleteStatusSchema.add(ElementSchema);
ConditionalDeleteStatusSchema.remove('id');
ConditionalDeleteStatusSchema.add({
  value: String,
});

module.exports.ConditionalDeleteStatusSchema = ConditionalDeleteStatusSchema;
