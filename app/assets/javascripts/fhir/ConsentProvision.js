const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { ConsentProvisionActorSchema } = require('./allSchemaHeaders.js');
const { ConsentProvisionDataSchema } = require('./allSchemaHeaders.js');
const { ConsentProvisionTypeSchema } = require('./allSchemaHeaders.js');
const { PeriodSchema } = require('./allSchemaHeaders.js');
const { ConsentProvisionSchema } = require('./allSchemaHeaders.js');

ConsentProvisionSchema.add(BackboneElementSchema);
ConsentProvisionSchema.remove('id');
ConsentProvisionSchema.add({
  type: ConsentProvisionTypeSchema,
  period: PeriodSchema,
  actor: [ConsentProvisionActorSchema],
  action: [CodeableConceptSchema],
  securityLabel: [CodingSchema],
  purpose: [CodingSchema],
  class: [CodingSchema],
  code: [CodeableConceptSchema],
  dataPeriod: PeriodSchema,
  data: [ConsentProvisionDataSchema],
  provision: [ConsentProvisionSchema],
});

module.exports.ConsentProvisionSchema = ConsentProvisionSchema;
