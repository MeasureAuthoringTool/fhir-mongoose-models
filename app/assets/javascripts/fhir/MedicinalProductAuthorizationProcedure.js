const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { MedicinalProductAuthorizationProcedureSchema } = require('./allSchemaHeaders.js');

MedicinalProductAuthorizationProcedureSchema.add(BackboneElementSchema);
MedicinalProductAuthorizationProcedureSchema.remove('id');
MedicinalProductAuthorizationProcedureSchema.add({
  identifier: IdentifierSchema,
  type: CodeableConceptSchema,
  datePeriod: PeriodSchema,
  dateDateTime: PrimitiveDateTimeSchema,
  application: [MedicinalProductAuthorizationProcedureSchema],
});

module.exports.MedicinalProductAuthorizationProcedureSchema = MedicinalProductAuthorizationProcedureSchema;
