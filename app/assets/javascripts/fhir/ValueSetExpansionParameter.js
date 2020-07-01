const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveCodeSchema } = require('./PrimitiveCode');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');

const ValueSetExpansionParameterSchema = BackboneElementSchemaFunction({
  name: PrimitiveStringSchema,
  valueString: PrimitiveStringSchema,
  valueBoolean: PrimitiveBooleanSchema,
  valueInteger: PrimitiveIntegerSchema,
  valueDecimal: PrimitiveDecimalSchema,
  valueUri: PrimitiveUriSchema,
  valueCode: PrimitiveCodeSchema,
  valueDateTime: PrimitiveDateTimeSchema,
  typeName: { type: String, default: 'ValueSetExpansionParameter' },
  _type: { type: String, default: 'FHIR::ValueSetExpansionParameter' },
});

class ValueSetExpansionParameter extends mongoose.Document {
  constructor(object) {
    super(object, ValueSetExpansionParameterSchema);
    this.typeName = 'ValueSetExpansionParameter';
    this._type = 'FHIR::ValueSetExpansionParameter';
  }
}

module.exports.ValueSetExpansionParameterSchema = ValueSetExpansionParameterSchema;
module.exports.ValueSetExpansionParameter = ValueSetExpansionParameter;
