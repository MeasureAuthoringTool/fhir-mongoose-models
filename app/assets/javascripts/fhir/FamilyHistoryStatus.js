const { ElementSchema } = require('./Element');
const { FamilyHistoryStatusSchema } = require('./allSchemaHeaders.js');

FamilyHistoryStatusSchema.add(ElementSchema);
FamilyHistoryStatusSchema.remove('id');
FamilyHistoryStatusSchema.add({
  value: String,
});

module.exports.FamilyHistoryStatusSchema = FamilyHistoryStatusSchema;
