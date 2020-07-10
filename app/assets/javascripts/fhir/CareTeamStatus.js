const { ElementSchema } = require('./Element');
const { CareTeamStatusSchema } = require('./allSchemaHeaders.js');

CareTeamStatusSchema.add(ElementSchema);
CareTeamStatusSchema.remove('id');
CareTeamStatusSchema.add({
  value: String,
});

module.exports.CareTeamStatusSchema = CareTeamStatusSchema;
