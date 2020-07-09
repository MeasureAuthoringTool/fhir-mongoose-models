const { AuditEventAgentNetworkSchema } = require('./allSchemaHeaders.js');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { PrimitiveUriSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { AuditEventAgentSchema } = require('./allSchemaHeaders.js');

AuditEventAgentSchema.add(BackboneElementSchema);
AuditEventAgentSchema.remove('id');
AuditEventAgentSchema.add({
  type: CodeableConceptSchema,
  role: [CodeableConceptSchema],
  who: ReferenceSchema,
  altId: PrimitiveStringSchema,
  name: PrimitiveStringSchema,
  requestor: PrimitiveBooleanSchema,
  location: ReferenceSchema,
  policy: [PrimitiveUriSchema],
  media: CodingSchema,
  network: AuditEventAgentNetworkSchema,
  purposeOfUse: [CodeableConceptSchema],
});

module.exports.AuditEventAgentSchema = AuditEventAgentSchema;
