const { ElementSchema } = require('./Element');
const { ResearchSubjectStatusSchema } = require('./allSchemaHeaders.js');

ResearchSubjectStatusSchema.add(ElementSchema);
ResearchSubjectStatusSchema.remove('id');
ResearchSubjectStatusSchema.add({
  value: String,
});

module.exports.ResearchSubjectStatusSchema = ResearchSubjectStatusSchema;
