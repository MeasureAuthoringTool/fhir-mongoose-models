const mongoose = require('mongoose/browser');
const { ActionRelationshipTypeSchema } = require('./ActionRelationshipType');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { DurationSchema } = require('./Duration');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { RangeSchema } = require('./Range');

const RequestGroupActionRelatedActionSchema = BackboneElementSchemaFunction({
  actionId: PrimitiveIdSchema,
  relationship: ActionRelationshipTypeSchema,
  offsetDuration: DurationSchema,
  offsetRange: RangeSchema,
  typeName: { type: String, default: 'RequestGroupActionRelatedAction' },
  _type: { type: String, default: 'FHIR::RequestGroupActionRelatedAction' },
});

class RequestGroupActionRelatedAction extends mongoose.Document {
  constructor(object) {
    super(object, RequestGroupActionRelatedActionSchema);
    this.typeName = 'RequestGroupActionRelatedAction';
    this._type = 'FHIR::RequestGroupActionRelatedAction';
  }
}

module.exports.RequestGroupActionRelatedActionSchema = RequestGroupActionRelatedActionSchema;
module.exports.RequestGroupActionRelatedAction = RequestGroupActionRelatedAction;
