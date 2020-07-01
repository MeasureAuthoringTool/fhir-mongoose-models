const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDecimalSchema } = require('./PrimitiveDecimal');
const { PrimitiveIdSchema } = require('./PrimitiveId');
const { PrimitiveIntegerSchema } = require('./PrimitiveInteger');
const { PrimitiveStringSchema } = require('./PrimitiveString');

const StructureMapGroupRuleTargetParameterSchema = BackboneElementSchemaFunction({
  valueId: PrimitiveIdSchema,
  valueString: PrimitiveStringSchema,
  valueBoolean: PrimitiveBooleanSchema,
  valueInteger: PrimitiveIntegerSchema,
  valueDecimal: PrimitiveDecimalSchema,
  typeName: { type: String, default: 'StructureMapGroupRuleTargetParameter' },
  _type: { type: String, default: 'FHIR::StructureMapGroupRuleTargetParameter' },
});

class StructureMapGroupRuleTargetParameter extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapGroupRuleTargetParameterSchema);
    this.typeName = 'StructureMapGroupRuleTargetParameter';
    this._type = 'FHIR::StructureMapGroupRuleTargetParameter';
  }
}

module.exports.StructureMapGroupRuleTargetParameterSchema = StructureMapGroupRuleTargetParameterSchema;
module.exports.StructureMapGroupRuleTargetParameter = StructureMapGroupRuleTargetParameter;
