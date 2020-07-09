const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBase64BinarySchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { AuditEventEntityDetailSchema } = require('./allSchemaHeaders.js');

AuditEventEntityDetailSchema.add(BackboneElementSchema);
AuditEventEntityDetailSchema.remove('id');
AuditEventEntityDetailSchema.add({
  type: PrimitiveStringSchema,
  valueString: PrimitiveStringSchema,
  valueBase64Binary: PrimitiveBase64BinarySchema,
});

module.exports.AuditEventEntityDetailSchema = AuditEventEntityDetailSchema;
