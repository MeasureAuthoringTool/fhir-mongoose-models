const { ElementSchema } = require('./Element');
const { CodeSystemHierarchyMeaningSchema } = require('./allSchemaHeaders.js');

CodeSystemHierarchyMeaningSchema.add(ElementSchema);
CodeSystemHierarchyMeaningSchema.remove('id');
CodeSystemHierarchyMeaningSchema.add({
  value: String,
});

module.exports.CodeSystemHierarchyMeaningSchema = CodeSystemHierarchyMeaningSchema;
