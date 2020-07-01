const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { ExpressionSchema } = require('./Expression');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const ActivityDefinitionDynamicValueSchema = BackboneElementSchemaFunction({
  path: PrimitiveStringSchema,
  expression: ExpressionSchema,
  typeName: { type: String, default: 'ActivityDefinitionDynamicValue' },
  _type: { type: String, default: 'FHIR::ActivityDefinitionDynamicValue' },
});

class ActivityDefinitionDynamicValue extends mongoose.Document {
  constructor(object) {
    super(object, ActivityDefinitionDynamicValueSchema);
    this.typeName = 'ActivityDefinitionDynamicValue';
    this._type = 'FHIR::ActivityDefinitionDynamicValue';
  }
}

module.exports.ActivityDefinitionDynamicValueSchema = ActivityDefinitionDynamicValueSchema;
module.exports.ActivityDefinitionDynamicValue = ActivityDefinitionDynamicValue;
