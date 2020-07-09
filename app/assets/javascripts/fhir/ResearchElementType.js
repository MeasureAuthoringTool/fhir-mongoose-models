const { ElementSchema } = require('./Element');
const { ResearchElementTypeSchema } = require('./allSchemaHeaders.js');

ResearchElementTypeSchema.add(ElementSchema);
ResearchElementTypeSchema.remove('id');
ResearchElementTypeSchema.add({
  value: String,
});

module.exports.ResearchElementTypeSchema = ResearchElementTypeSchema;
