const { ElementSchema } = require('./Element');
const { BiologicallyDerivedProductStorageScaleSchema } = require('./allSchemaHeaders.js');

BiologicallyDerivedProductStorageScaleSchema.add(ElementSchema);
BiologicallyDerivedProductStorageScaleSchema.remove('id');
BiologicallyDerivedProductStorageScaleSchema.add({
  value: String,
});

module.exports.BiologicallyDerivedProductStorageScaleSchema = BiologicallyDerivedProductStorageScaleSchema;
