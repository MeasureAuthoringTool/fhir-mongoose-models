const { ElementSchema } = require('./Element');
const { RiskAssessmentStatusSchema } = require('./allSchemaHeaders.js');

RiskAssessmentStatusSchema.add(ElementSchema);
RiskAssessmentStatusSchema.remove('id');
RiskAssessmentStatusSchema.add({
  value: String,
});

module.exports.RiskAssessmentStatusSchema = RiskAssessmentStatusSchema;
