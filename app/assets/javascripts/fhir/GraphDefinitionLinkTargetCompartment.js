const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CompartmentCodeSchema } = require('./CompartmentCode');
const { GraphCompartmentRuleSchema } = require('./GraphCompartmentRule');
const { GraphCompartmentUseSchema } = require('./GraphCompartmentUse');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const GraphDefinitionLinkTargetCompartmentSchema = BackboneElementSchemaFunction({
   use : GraphCompartmentUseSchema,
   code : CompartmentCodeSchema,
   rule : GraphCompartmentRuleSchema,
   expression : String,
   description : String,
   fhirTitle: { type: String, default: 'GraphDefinitionLinkTargetCompartment' },
});

class GraphDefinitionLinkTargetCompartment extends mongoose.Document {
  constructor(object) {
    super(object, GraphDefinitionLinkTargetCompartmentSchema);
    this._type = 'FHIR::GraphDefinitionLinkTargetCompartment';
  }
};


module.exports.GraphDefinitionLinkTargetCompartmentSchema = GraphDefinitionLinkTargetCompartmentSchema;
module.exports.GraphDefinitionLinkTargetCompartment = GraphDefinitionLinkTargetCompartment;
