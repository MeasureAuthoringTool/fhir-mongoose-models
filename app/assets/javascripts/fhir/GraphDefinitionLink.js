const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { GraphDefinitionLinkTargetSchema } = require('./GraphDefinitionLinkTarget');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const GraphDefinitionLinkSchema = BackboneElementSchemaFunction({
  path: PrimitiveStringSchema,
  sliceName: PrimitiveStringSchema,
  min: PrimitiveIntegerSchema,
  max: PrimitiveStringSchema,
  description: PrimitiveStringSchema,
  target: [GraphDefinitionLinkTargetSchema],
  typeName: { type: String, default: 'GraphDefinitionLink' },
  _type: { type: String, default: 'FHIR::GraphDefinitionLink' },
});

class GraphDefinitionLink extends mongoose.Document {
  constructor(object) {
    super(object, GraphDefinitionLinkSchema);
    this.typeName = 'GraphDefinitionLink';
    this._type = 'FHIR::GraphDefinitionLink';
  }
}

module.exports.GraphDefinitionLinkSchema = GraphDefinitionLinkSchema;
module.exports.GraphDefinitionLink = GraphDefinitionLink;
