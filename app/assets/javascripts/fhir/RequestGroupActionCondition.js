const mongoose = require('mongoose/browser');
const { ActionConditionKindSchema } = require('./ActionConditionKind');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ExpressionSchema } = require('./Expression');

const RequestGroupActionConditionSchema = BackboneElementSchemaFunction({
  kind: ActionConditionKindSchema,
  expression: ExpressionSchema,
  typeName: { type: String, default: 'RequestGroupActionCondition' },
  _type: { type: String, default: 'FHIR::RequestGroupActionCondition' },
});

class RequestGroupActionCondition extends mongoose.Document {
  constructor(object) {
    super(object, RequestGroupActionConditionSchema);
    this.typeName = 'RequestGroupActionCondition';
    this._type = 'FHIR::RequestGroupActionCondition';
  }
}

module.exports.RequestGroupActionConditionSchema = RequestGroupActionConditionSchema;
module.exports.RequestGroupActionCondition = RequestGroupActionCondition;
