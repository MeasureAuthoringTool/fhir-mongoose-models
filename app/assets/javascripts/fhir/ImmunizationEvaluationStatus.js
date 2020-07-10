const { ElementSchema } = require('./Element');
const { ImmunizationEvaluationStatusSchema } = require('./allSchemaHeaders.js');

ImmunizationEvaluationStatusSchema.add(ElementSchema);
ImmunizationEvaluationStatusSchema.remove('id');
ImmunizationEvaluationStatusSchema.add({
  value: String,
});

module.exports.ImmunizationEvaluationStatusSchema = ImmunizationEvaluationStatusSchema;
