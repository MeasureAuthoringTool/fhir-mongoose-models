const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const CodeSystemConceptPropertySchema = BackboneElementSchemaFunction({
  code: PrimitiveCodeSchema,
  valueCode: PrimitiveCodeSchema,
  valueCoding: CodingSchema,
  valueString: PrimitiveStringSchema,
  valueInteger: PrimitiveIntegerSchema,
  valueBoolean: PrimitiveBooleanSchema,
  valueDateTime: PrimitiveDateTimeSchema,
  valueDecimal: PrimitiveDecimalSchema,
  typeName: { type: String, default: 'CodeSystemConceptProperty' },
  _type: { type: String, default: 'FHIR::CodeSystemConceptProperty' },
});

class CodeSystemConceptProperty extends mongoose.Document {
  constructor(object) {
    super(object, CodeSystemConceptPropertySchema);
    this.typeName = 'CodeSystemConceptProperty';
    this._type = 'FHIR::CodeSystemConceptProperty';
  }
}

module.exports.CodeSystemConceptPropertySchema = CodeSystemConceptPropertySchema;
module.exports.CodeSystemConceptProperty = CodeSystemConceptProperty;
