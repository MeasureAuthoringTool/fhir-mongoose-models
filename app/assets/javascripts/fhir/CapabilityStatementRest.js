const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CapabilityStatementRestInteractionSchema } = require('./CapabilityStatementRestInteraction');
const { CapabilityStatementRestResourceSchema } = require('./CapabilityStatementRestResource');
const { CapabilityStatementRestResourceOperationSchema } = require('./CapabilityStatementRestResourceOperation');
const { CapabilityStatementRestResourceSearchParamSchema } = require('./CapabilityStatementRestResourceSearchParam');
const { CapabilityStatementRestSecuritySchema } = require('./CapabilityStatementRestSecurity');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveMarkdownSchema } = require('./PrimitiveMarkdown');
const { RestfulCapabilityModeSchema } = require('./RestfulCapabilityMode');

const CapabilityStatementRestSchema = BackboneElementSchemaFunction({
  mode: RestfulCapabilityModeSchema,
  documentation: PrimitiveMarkdownSchema,
  security: CapabilityStatementRestSecuritySchema,
  resource: [CapabilityStatementRestResourceSchema],
  interaction: [CapabilityStatementRestInteractionSchema],
  searchParam: [CapabilityStatementRestResourceSearchParamSchema],
  operation: [CapabilityStatementRestResourceOperationSchema],
  compartment: [PrimitiveCanonicalSchema],
  typeName: { type: String, default: 'CapabilityStatementRest' },
  _type: { type: String, default: 'FHIR::CapabilityStatementRest' },
});

class CapabilityStatementRest extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementRestSchema);
    this.typeName = 'CapabilityStatementRest';
    this._type = 'FHIR::CapabilityStatementRest';
  }
}

module.exports.CapabilityStatementRestSchema = CapabilityStatementRestSchema;
module.exports.CapabilityStatementRest = CapabilityStatementRest;
