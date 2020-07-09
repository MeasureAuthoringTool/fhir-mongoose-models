const { ElementSchema } = require('./Element');
const { SpecimenStatusSchema } = require('./allSchemaHeaders.js');

SpecimenStatusSchema.add(ElementSchema);
SpecimenStatusSchema.remove('id');
SpecimenStatusSchema.add({
  value: String,
});

module.exports.SpecimenStatusSchema = SpecimenStatusSchema;
