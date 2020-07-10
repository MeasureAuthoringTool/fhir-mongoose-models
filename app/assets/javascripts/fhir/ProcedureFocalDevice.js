const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ProcedureFocalDeviceSchema } = require('./allSchemaHeaders.js');

ProcedureFocalDeviceSchema.add(BackboneElementSchema);
ProcedureFocalDeviceSchema.remove('id');
ProcedureFocalDeviceSchema.add({
  action: CodeableConceptSchema,
  manipulated: ReferenceSchema,
});

module.exports.ProcedureFocalDeviceSchema = ProcedureFocalDeviceSchema;
