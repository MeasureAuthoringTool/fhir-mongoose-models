const mongoose = require('mongoose/browser');
const { ActionRelationshipTypeSchema } = require('./ActionRelationshipType');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { DurationSchema } = require('./Duration');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { RangeSchema } = require('./Range');

const PlanDefinitionActionRelatedActionSchema = BackboneElementSchemaFunction({
  actionId: PrimitiveIdSchema,
  relationship: ActionRelationshipTypeSchema,
  offsetDuration: DurationSchema,
  offsetRange: RangeSchema,
  typeName: { type: String, default: 'PlanDefinitionActionRelatedAction' },
  _type: { type: String, default: 'FHIR::PlanDefinitionActionRelatedAction' },
});

class PlanDefinitionActionRelatedAction extends mongoose.Document {
  constructor(object) {
    super(object, PlanDefinitionActionRelatedActionSchema);
    this.typeName = 'PlanDefinitionActionRelatedAction';
    this._type = 'FHIR::PlanDefinitionActionRelatedAction';
  }
}

module.exports.PlanDefinitionActionRelatedActionSchema = PlanDefinitionActionRelatedActionSchema;
module.exports.PlanDefinitionActionRelatedAction = PlanDefinitionActionRelatedAction;
