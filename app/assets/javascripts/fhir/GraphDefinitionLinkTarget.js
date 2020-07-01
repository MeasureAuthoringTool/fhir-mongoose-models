const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { GraphDefinitionLinkSchema } = require('./GraphDefinitionLink');
const { GraphDefinitionLinkTargetCompartmentSchema } = require('./GraphDefinitionLinkTargetCompartment');
const { PrimitiveCanonicalSchema } = require('./PrimitiveCanonical');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ResourceTypeSchema } = require('./ResourceType');

const GraphDefinitionLinkTargetSchema = BackboneElementSchemaFunction({
  type: ResourceTypeSchema,
  params: PrimitiveStringSchema,
  profile: PrimitiveCanonicalSchema,
  compartment: [GraphDefinitionLinkTargetCompartmentSchema],
  link: [GraphDefinitionLinkSchema],
  typeName: { type: String, default: 'GraphDefinitionLinkTarget' },
  _type: { type: String, default: 'FHIR::GraphDefinitionLinkTarget' },
});

class GraphDefinitionLinkTarget extends mongoose.Document {
  constructor(object) {
    super(object, GraphDefinitionLinkTargetSchema);
    this.typeName = 'GraphDefinitionLinkTarget';
    this._type = 'FHIR::GraphDefinitionLinkTarget';
  }
}

module.exports.GraphDefinitionLinkTargetSchema = GraphDefinitionLinkTargetSchema;
module.exports.GraphDefinitionLinkTarget = GraphDefinitionLinkTarget;
