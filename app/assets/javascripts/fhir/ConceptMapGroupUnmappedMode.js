const { ElementSchema } = require('./Element');
const { ConceptMapGroupUnmappedModeSchema } = require('./allSchemaHeaders.js');

ConceptMapGroupUnmappedModeSchema.add(ElementSchema);
ConceptMapGroupUnmappedModeSchema.remove('id');
ConceptMapGroupUnmappedModeSchema.add({
  value: String,
});

module.exports.ConceptMapGroupUnmappedModeSchema = ConceptMapGroupUnmappedModeSchema;
