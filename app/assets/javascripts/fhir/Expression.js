const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');

const ExpressionSchema = ElementSchemaFunction({
  description: PrimitiveStringSchema,
  name: PrimitiveIdSchema,
  language: PrimitiveCodeSchema,
  expression: PrimitiveStringSchema,
  reference: PrimitiveUriSchema,
  typeName: { type: String, default: 'Expression' },
  _type: { type: String, default: 'FHIR::Expression' },
});

class Expression extends mongoose.Document {
  constructor(object) {
    super(object, ExpressionSchema);
    this.typeName = 'Expression';
    this._type = 'FHIR::Expression';
  }
}

module.exports.ExpressionSchema = ExpressionSchema;
module.exports.Expression = Expression;
