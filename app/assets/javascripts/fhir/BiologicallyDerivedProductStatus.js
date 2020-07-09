const { ElementSchema } = require('./Element');
const { BiologicallyDerivedProductStatusSchema } = require('./allSchemaHeaders.js');

BiologicallyDerivedProductStatusSchema.add(ElementSchema);
BiologicallyDerivedProductStatusSchema.remove('id');
BiologicallyDerivedProductStatusSchema.add({
  value: String,
});

module.exports.BiologicallyDerivedProductStatusSchema = BiologicallyDerivedProductStatusSchema;
