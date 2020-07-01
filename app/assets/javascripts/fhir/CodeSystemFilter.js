const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { FilterOperatorSchema } = require('./FilterOperator');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const CodeSystemFilterSchema = BackboneElementSchemaFunction({
  code: PrimitiveCodeSchema,
  description: PrimitiveStringSchema,
  operator: [FilterOperatorSchema],
  value: PrimitiveStringSchema,
  typeName: { type: String, default: 'CodeSystemFilter' },
  _type: { type: String, default: 'FHIR::CodeSystemFilter' },
});

class CodeSystemFilter extends mongoose.Document {
  constructor(object) {
    super(object, CodeSystemFilterSchema);
    this.typeName = 'CodeSystemFilter';
    this._type = 'FHIR::CodeSystemFilter';
  }
}

module.exports.CodeSystemFilterSchema = CodeSystemFilterSchema;
module.exports.CodeSystemFilter = CodeSystemFilter;
