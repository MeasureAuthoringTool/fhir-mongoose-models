const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CompartmentCodeSchema } = require('./CompartmentCode');
const { GraphCompartmentRuleSchema } = require('./GraphCompartmentRule');
const { GraphCompartmentUseSchema } = require('./GraphCompartmentUse');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const GraphDefinitionLinkTargetCompartmentSchema = BackboneElementSchemaFunction({
  use: GraphCompartmentUseSchema,
  code: CompartmentCodeSchema,
  rule: GraphCompartmentRuleSchema,
  expression: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  typeName: { type: String, default: 'GraphDefinitionLinkTargetCompartment' },
  _type: { type: String, default: 'FHIR::GraphDefinitionLinkTargetCompartment' },
});

class GraphDefinitionLinkTargetCompartment extends mongoose.Document {
  constructor(object) {
    super(object, GraphDefinitionLinkTargetCompartmentSchema);
    this.typeName = 'GraphDefinitionLinkTargetCompartment';
    this._type = 'FHIR::GraphDefinitionLinkTargetCompartment';
  }
}

module.exports.GraphDefinitionLinkTargetCompartmentSchema = GraphDefinitionLinkTargetCompartmentSchema;
module.exports.GraphDefinitionLinkTargetCompartment = GraphDefinitionLinkTargetCompartment;
