const { ElementSchema } = require('./Element');
const { ConceptMapEquivalenceSchema } = require('./allSchemaHeaders.js');

ConceptMapEquivalenceSchema.add(ElementSchema);
ConceptMapEquivalenceSchema.remove('id');
ConceptMapEquivalenceSchema.add({
  value: String,
});

module.exports.ConceptMapEquivalenceSchema = ConceptMapEquivalenceSchema;
