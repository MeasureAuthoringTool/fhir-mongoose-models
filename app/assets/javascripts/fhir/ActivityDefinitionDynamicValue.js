const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ExpressionSchema } = require('./Expression');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ActivityDefinitionDynamicValueSchema = BackboneElementSchemaFunction({
   path : String,
   expression : ExpressionSchema,
   fhirTitle: { type: String, default: 'ActivityDefinitionDynamicValue' },
});

class ActivityDefinitionDynamicValue extends mongoose.Document {
  constructor(object) {
    super(object, ActivityDefinitionDynamicValueSchema);
    this._type = 'FHIR::ActivityDefinitionDynamicValue';
  }
};


module.exports.ActivityDefinitionDynamicValueSchema = ActivityDefinitionDynamicValueSchema;
module.exports.ActivityDefinitionDynamicValue = ActivityDefinitionDynamicValue;
