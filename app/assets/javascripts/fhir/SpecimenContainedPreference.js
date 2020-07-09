const { ElementSchema } = require('./Element');
const { SpecimenContainedPreferenceSchema } = require('./allSchemaHeaders.js');

SpecimenContainedPreferenceSchema.add(ElementSchema);
SpecimenContainedPreferenceSchema.remove('id');
SpecimenContainedPreferenceSchema.add({
  value: String,
});

module.exports.SpecimenContainedPreferenceSchema = SpecimenContainedPreferenceSchema;
