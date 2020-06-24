const mongoose = require('mongoose/browser');
const { ActionRelationshipTypeSchema } = require('./ActionRelationshipType');
const { BackboneElementSchema } = require('./BackboneElement');
const { DurationSchema } = require('./Duration');
const { RangeSchema } = require('./Range');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const PlanDefinitionActionRelatedActionSchema = BackboneElementSchemaFunction({
   actionId : String,
   relationship : ActionRelationshipTypeSchema,
   offsetDuration : DurationSchema,
   offsetRange : RangeSchema,
   fhirTitle: { type: String, default: 'PlanDefinitionActionRelatedAction' },
});

class PlanDefinitionActionRelatedAction extends mongoose.Document {
  constructor(object) {
    super(object, PlanDefinitionActionRelatedActionSchema);
    this._type = 'FHIR::PlanDefinitionActionRelatedAction';
  }
};


module.exports.PlanDefinitionActionRelatedActionSchema = PlanDefinitionActionRelatedActionSchema;
module.exports.PlanDefinitionActionRelatedAction = PlanDefinitionActionRelatedAction;
