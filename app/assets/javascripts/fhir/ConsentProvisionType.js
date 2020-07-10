const { ElementSchema } = require('./Element');
const { ConsentProvisionTypeSchema } = require('./allSchemaHeaders.js');

ConsentProvisionTypeSchema.add(ElementSchema);
ConsentProvisionTypeSchema.remove('id');
ConsentProvisionTypeSchema.add({
  value: String,
});

module.exports.ConsentProvisionTypeSchema = ConsentProvisionTypeSchema;
