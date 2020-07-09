const { ElementSchema } = require('./Element');
const { ClinicalImpressionStatusSchema } = require('./allSchemaHeaders.js');

ClinicalImpressionStatusSchema.add(ElementSchema);
ClinicalImpressionStatusSchema.remove('id');
ClinicalImpressionStatusSchema.add({
  value: String,
});

module.exports.ClinicalImpressionStatusSchema = ClinicalImpressionStatusSchema;
