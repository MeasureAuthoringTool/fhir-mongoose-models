const { ElementSchema } = require('./Element');
const { CoverageStatusSchema } = require('./allSchemaHeaders.js');

CoverageStatusSchema.add(ElementSchema);
CoverageStatusSchema.remove('id');
CoverageStatusSchema.add({
  value: String,
});

module.exports.CoverageStatusSchema = CoverageStatusSchema;
