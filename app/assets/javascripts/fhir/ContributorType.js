const { ElementSchema } = require('./Element');
const { ContributorTypeSchema } = require('./allSchemaHeaders.js');

ContributorTypeSchema.add(ElementSchema);
ContributorTypeSchema.remove('id');
ContributorTypeSchema.add({
  value: String,
});

module.exports.ContributorTypeSchema = ContributorTypeSchema;
