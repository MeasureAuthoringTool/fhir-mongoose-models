const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { GraphDefinitionLinkSchema } = require('./GraphDefinitionLink');
const { GraphDefinitionLinkTargetCompartmentSchema } = require('./GraphDefinitionLinkTargetCompartment');
const { ResourceTypeSchema } = require('./ResourceType');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const GraphDefinitionLinkTargetSchema = BackboneElementSchemaFunction({
   type : ResourceTypeSchema,
   params : String,
   profile : String,
   compartment : [GraphDefinitionLinkTargetCompartmentSchema],
   link : [GraphDefinitionLinkSchema],
   fhirTitle: { type: String, default: 'GraphDefinitionLinkTarget' },
});

class GraphDefinitionLinkTarget extends mongoose.Document {
  constructor(object) {
    super(object, GraphDefinitionLinkTargetSchema);
    this._type = 'FHIR::GraphDefinitionLinkTarget';
  }
};


module.exports.GraphDefinitionLinkTargetSchema = GraphDefinitionLinkTargetSchema;
module.exports.GraphDefinitionLinkTarget = GraphDefinitionLinkTarget;
