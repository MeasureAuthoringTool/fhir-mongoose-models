const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { AuditEventSourceSchema } = require('./allSchemaHeaders.js');

AuditEventSourceSchema.add(BackboneElementSchema);
AuditEventSourceSchema.remove('id');
AuditEventSourceSchema.add({
  site: PrimitiveStringSchema,
  observer: ReferenceSchema,
  type: [CodingSchema],
});

module.exports.AuditEventSourceSchema = AuditEventSourceSchema;
