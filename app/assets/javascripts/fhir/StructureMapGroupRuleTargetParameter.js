const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureMapGroupRuleTargetParameterSchema = BackboneElementSchemaFunction({
   valueId : String,
   valueString : String,
   valueBoolean : Boolean,
   valueInteger : Number,
   valueDecimal : Number,
   fhirTitle: { type: String, default: 'StructureMapGroupRuleTargetParameter' },
});

class StructureMapGroupRuleTargetParameter extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapGroupRuleTargetParameterSchema);
    this._type = 'FHIR::StructureMapGroupRuleTargetParameter';
  }
};


module.exports.StructureMapGroupRuleTargetParameterSchema = StructureMapGroupRuleTargetParameterSchema;
module.exports.StructureMapGroupRuleTargetParameter = StructureMapGroupRuleTargetParameter;
