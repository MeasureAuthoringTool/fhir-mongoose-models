const { ElementSchema } = require('./Element');
const { ProcedureStatusSchema } = require('./allSchemaHeaders.js');

ProcedureStatusSchema.add(ElementSchema);
ProcedureStatusSchema.remove('id');
ProcedureStatusSchema.add({
  value: String,
});

module.exports.ProcedureStatusSchema = ProcedureStatusSchema;
