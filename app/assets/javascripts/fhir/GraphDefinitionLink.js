const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { GraphDefinitionLinkTargetSchema } = require('./GraphDefinitionLinkTarget');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const GraphDefinitionLinkSchema = BackboneElementSchemaFunction({
   path : String,
   sliceName : String,
   min : Number,
   max : String,
   description : String,
   target : [GraphDefinitionLinkTargetSchema],
   fhirTitle: { type: String, default: 'GraphDefinitionLink' },
});

class GraphDefinitionLink extends mongoose.Document {
  constructor(object) {
    super(object, GraphDefinitionLinkSchema);
    this._type = 'FHIR::GraphDefinitionLink';
  }
};


module.exports.GraphDefinitionLinkSchema = GraphDefinitionLinkSchema;
module.exports.GraphDefinitionLink = GraphDefinitionLink;
