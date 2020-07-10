const { BackboneElementSchema } = require('./BackboneElement');
const { CapabilityStatementRestResourceInteractionSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementRestResourceOperationSchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementRestResourceSearchParamSchema } = require('./allSchemaHeaders.js');
const { ConditionalDeleteStatusSchema } = require('./allSchemaHeaders.js');
const { ConditionalReadStatusSchema } = require('./allSchemaHeaders.js');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveCanonicalSchema } = require('./allSchemaHeaders.js');
const { PrimitiveMarkdownSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceHandlingPolicySchema } = require('./allSchemaHeaders.js');
const { ResourceTypeSchema } = require('./allSchemaHeaders.js');
const { ResourceVersionPolicySchema } = require('./allSchemaHeaders.js');
const { CapabilityStatementRestResourceSchema } = require('./allSchemaHeaders.js');

CapabilityStatementRestResourceSchema.add(BackboneElementSchema);
CapabilityStatementRestResourceSchema.remove('id');
CapabilityStatementRestResourceSchema.add({
  type: ResourceTypeSchema,
  profile: PrimitiveCanonicalSchema,
  supportedProfile: [PrimitiveCanonicalSchema],
  documentation: PrimitiveMarkdownSchema,
  interaction: [CapabilityStatementRestResourceInteractionSchema],
  versioning: ResourceVersionPolicySchema,
  readHistory: PrimitiveBooleanSchema,
  updateCreate: PrimitiveBooleanSchema,
  conditionalCreate: PrimitiveBooleanSchema,
  conditionalRead: ConditionalReadStatusSchema,
  conditionalUpdate: PrimitiveBooleanSchema,
  conditionalDelete: ConditionalDeleteStatusSchema,
  referencePolicy: [ReferenceHandlingPolicySchema],
  searchInclude: [PrimitiveStringSchema],
  searchRevInclude: [PrimitiveStringSchema],
  searchParam: [CapabilityStatementRestResourceSearchParamSchema],
  operation: [CapabilityStatementRestResourceOperationSchema],
});

module.exports.CapabilityStatementRestResourceSchema = CapabilityStatementRestResourceSchema;
