const mongoose = require('mongoose/browser');
const { ActionConditionKindSchema } = require('./ActionConditionKind');
const { BackboneElementSchema } = require('./BackboneElement');
const { ExpressionSchema } = require('./Expression');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RequestGroupActionConditionSchema = BackboneElementSchemaFunction({
   kind : ActionConditionKindSchema,
   expression : ExpressionSchema,
   fhirTitle: { type: String, default: 'RequestGroupActionCondition' },
});

class RequestGroupActionCondition extends mongoose.Document {
  constructor(object) {
    super(object, RequestGroupActionConditionSchema);
    this._type = 'FHIR::RequestGroupActionCondition';
  }
};


module.exports.RequestGroupActionConditionSchema = RequestGroupActionConditionSchema;
module.exports.RequestGroupActionCondition = RequestGroupActionCondition;
