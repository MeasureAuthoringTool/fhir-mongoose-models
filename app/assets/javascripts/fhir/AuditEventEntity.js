const { AuditEventEntityDetailSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBase64BinarySchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { AuditEventEntitySchema } = require('./allSchemaHeaders.js');

AuditEventEntitySchema.add(BackboneElementSchema);
AuditEventEntitySchema.remove('id');
AuditEventEntitySchema.add({
  what: ReferenceSchema,
  type: CodingSchema,
  role: CodingSchema,
  lifecycle: CodingSchema,
  securityLabel: [CodingSchema],
  name: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  query: PrimitiveBase64BinarySchema,
  detail: [AuditEventEntityDetailSchema],
});

module.exports.AuditEventEntitySchema = AuditEventEntitySchema;
