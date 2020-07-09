const { ElementSchema } = require('./Element');
const { ResearchStudyStatusSchema } = require('./allSchemaHeaders.js');

ResearchStudyStatusSchema.add(ElementSchema);
ResearchStudyStatusSchema.remove('id');
ResearchStudyStatusSchema.add({
  value: String,
});

module.exports.ResearchStudyStatusSchema = ResearchStudyStatusSchema;
