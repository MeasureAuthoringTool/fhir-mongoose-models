const { ElementSchema } = require('./Element');
const { RelatedArtifactTypeSchema } = require('./allSchemaHeaders.js');

RelatedArtifactTypeSchema.add(ElementSchema);
RelatedArtifactTypeSchema.remove('id');
RelatedArtifactTypeSchema.add({
  value: String,
});

module.exports.RelatedArtifactTypeSchema = RelatedArtifactTypeSchema;
