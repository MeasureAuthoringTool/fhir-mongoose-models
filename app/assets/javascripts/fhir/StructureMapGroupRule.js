const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { StructureMapGroupRuleDependentSchema } = require('./StructureMapGroupRuleDependent');
const { StructureMapGroupRuleSourceSchema } = require('./StructureMapGroupRuleSource');
const { StructureMapGroupRuleTargetSchema } = require('./StructureMapGroupRuleTarget');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureMapGroupRuleSchema = BackboneElementSchemaFunction({
   name : String,
   source : [StructureMapGroupRuleSourceSchema],
   target : [StructureMapGroupRuleTargetSchema],
   rule : [StructureMapGroupRuleSchema],
   dependent : [StructureMapGroupRuleDependentSchema],
   documentation : String,
   fhirTitle: { type: String, default: 'StructureMapGroupRule' },
});

class StructureMapGroupRule extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapGroupRuleSchema);
    this._type = 'FHIR::StructureMapGroupRule';
  }
};


module.exports.StructureMapGroupRuleSchema = StructureMapGroupRuleSchema;
module.exports.StructureMapGroupRule = StructureMapGroupRule;
