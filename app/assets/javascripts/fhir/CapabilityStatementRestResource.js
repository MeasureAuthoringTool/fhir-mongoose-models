const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CapabilityStatementRestResourceInteractionSchema } = require('./CapabilityStatementRestResourceInteraction');
const { CapabilityStatementRestResourceOperationSchema } = require('./CapabilityStatementRestResourceOperation');
const { CapabilityStatementRestResourceSearchParamSchema } = require('./CapabilityStatementRestResourceSearchParam');
const { ConditionalDeleteStatusSchema } = require('./ConditionalDeleteStatus');
const { ConditionalReadStatusSchema } = require('./ConditionalReadStatus');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceHandlingPolicySchema } = require('./ReferenceHandlingPolicy');
const { ResourceTypeSchema } = require('./ResourceType');
const { ResourceVersionPolicySchema } = require('./ResourceVersionPolicy');

const CapabilityStatementRestResourceSchema = BackboneElementSchemaFunction({
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
  typeName: { type: String, default: 'CapabilityStatementRestResource' },
  _type: { type: String, default: 'FHIR::CapabilityStatementRestResource' },
});

class CapabilityStatementRestResource extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementRestResourceSchema);
    this.typeName = 'CapabilityStatementRestResource';
    this._type = 'FHIR::CapabilityStatementRestResource';
  }
}

module.exports.CapabilityStatementRestResourceSchema = CapabilityStatementRestResourceSchema;
module.exports.CapabilityStatementRestResource = CapabilityStatementRestResource;
