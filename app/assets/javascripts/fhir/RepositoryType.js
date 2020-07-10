const { ElementSchema } = require('./Element');
const { RepositoryTypeSchema } = require('./allSchemaHeaders.js');

RepositoryTypeSchema.add(ElementSchema);
RepositoryTypeSchema.remove('id');
RepositoryTypeSchema.add({
  value: String,
});

module.exports.RepositoryTypeSchema = RepositoryTypeSchema;
